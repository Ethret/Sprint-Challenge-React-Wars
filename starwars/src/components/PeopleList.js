import React, { useState, useEffect } from 'react';
import axios from "axios";
import PersonCard from "./PersonCard.js";
import { Container, Row } from "reactstrap";

function PeopleList(props) {
    const [people, setPeople] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const peopleList = await axios.get(
            "https://swapi.co/api/people/"
          );
          setPeople(peopleList.data.results);
        } catch (err) {
          console.log(err);
        }
      }
      fetchData();
    }, []);

    console.log(people);


    return (
      <Container>
        <Row>
        {people.map(person => {
          return (
            <PersonCard
              name={person.name}
              birth_year={person.birth_year}
              height={person.height}
              mass={person.mass}
            />
          );
        })}
        </Row>
      </Container>
    );
  }

export default PeopleList;
