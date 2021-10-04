import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
    return (
      <Container className="text-center mx-auto">
        <div className="mx-auto w-75">
          <h2>GET IN TOUCH</h2>
          <p>
            There is no one who loves pain itself, who seeks after it and wants
            to have it, simply because it is pain... Neque porro quisquam est
            qui dolorem ipsum quia dolor sit amet.
          </p>
        </div>
        <div className="m-auto">
          <hr className="text-secondary mx-auto w-75" />
        </div>
        <Row className="w-75 mx-auto text-center mb-2">
          <Col>
            <input className="w-50" type="text" id="" placeholder="Name" />
          </Col>
          <Col>
            <input className="w-50" type="text" id="" placeholder="Email" />
          </Col>
        </Row>
        <Row className="w-75 mx-auto mb-2 text-center">
          <Col>
            <input className="w-50" type="text" id="" placeholder="Phone" />
          </Col>
          <br />
          <Col>
            <input className="w-50" type="text" id="" placeholder="Subject" />
          </Col>
        </Row>
        <Row className="w-75 mx-auto">
          <Col>
            <textArea className="me-3" rows="4" cols="50" className="">
              Write here
            </textArea>
          </Col>
        </Row>
      </Container>
    );
};

export default Contact;