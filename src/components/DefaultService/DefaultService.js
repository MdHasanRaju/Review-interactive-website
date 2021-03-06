import React from 'react';
import { Card, Col } from 'react-bootstrap';

const DefaultService = (props) => {
    const {service} = props;

    // displaying default data in home page
    return (
      <Col>
        <Card variant="h-100">
          <Card.Img variant="top h-50" src={service.img} />
          <Card.Body>
            <Card.Title>{service.name}</Card.Title>
            <Card.Text>Price: ${service.price}</Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between">
            <p>
              <i className="fas fa-user text-info"></i>{" "}
              <small>{service.count}</small>
            </p>
            <p>
              <small className="text-muted">
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
              </small>
            </p>
          </Card.Footer>
        </Card>
      </Col>
    );
};

export default DefaultService;