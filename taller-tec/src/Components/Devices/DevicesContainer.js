import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container'

const DevicesContainer = () => {
  return (
    <Container className="DevicesContainer">
      <ListGroup as="ol">
        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
        <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default DevicesContainer;
