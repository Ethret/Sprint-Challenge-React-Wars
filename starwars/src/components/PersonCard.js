import React from "react";
import { Card, CardText, CardBody, CardTitle, CardImg, Col } from "reactstrap";

function PersonCard(props) {
  return (
    <Col xs="6" lg="4" height="100%">
      <Card height="100%">
        <CardBody height="100%">
        {}
          <CardImg src="https://source.unsplash.com/random" width="100%" top />
          <CardTitle>{props.name}</CardTitle>
          <hr />
          <CardText>Height: {props.height}</CardText>
          <CardText height="100%">Mass: {props.mass}</CardText>
          <small>Date Born: {props.birth_year}</small>
          <hr />
        </CardBody>
      </Card>
    </Col>
  );
}

export default PersonCard;
