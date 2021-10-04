import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Services from '../Services/Services';

const ServiceDetails = (props) => {
    const {service} = props;
    console.log(service);
    return (
      <Col>
        <Card variant="h-100">
          <Card.Img variant="top h-50" src={service.img} />
          <Card.Body>
            <Card.Title>{service.name}</Card.Title>
            <Card.Text>Price: ${service.price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </Col>
    );
};

export default ServiceDetails;