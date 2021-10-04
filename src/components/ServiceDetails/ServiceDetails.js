import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ServiceDetails = (props) => {
    const {service} = props;
    console.log(service);
    return (
      <Col>
        <Card>
          <Card.Img variant="top h-50" src={service.img} />
          <Card.Body>
            <Card.Title>{service.name}</Card.Title>
            <Card.Text>Price: ${service.price}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
};

export default ServiceDetails;