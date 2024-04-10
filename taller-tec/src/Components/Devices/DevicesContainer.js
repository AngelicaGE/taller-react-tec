import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container'

const myDevices = [
    {id: 1, model: "iphone 13", color: "pink"},
    {id: 2, model: "iphone 15", color: "blue"},
    {id: 3, model: "iphone 10", color: "red"},
    {id: 4, model: "samsung galaxy", color: "pink"}
]

const DevicesContainer = () => {
  return (
    <Container className="DevicesContainer">
      <ListGroup as="ol">
        {
            myDevices.map(device => (
                <ListGroup.Item as="li" key={device.id}>
                    {device.model}: {device.color}
                </ListGroup.Item>
            ))
        }
      </ListGroup>
    </Container>
  );
};

export default DevicesContainer;
