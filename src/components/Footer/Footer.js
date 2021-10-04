import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
      <Container className="mt-3">
        <Row>
          <Col>
            <p>PSD TO HTML</p>
            <p>PSD TO HTML</p>
            <p>PSD TO HTML</p>
            <p>PSD TO HTML</p>
            <p>PSD TO HTML</p>
          </Col>
          <Col>
            <p>PSD TO HTML</p>
            <p>PSD TO HTML</p>
            <p>PSD TO HTML</p>
            <p>PSD TO HTML</p>
            <p>PSD TO HTML</p>
          </Col>
          <Col>
            <p>PSD TO HTML</p>
            <p>PSD TO HTML</p>
            <p>PSD TO HTML</p>
            <p>PSD TO HTML</p>
            <p>PSD TO HTML</p>
          </Col>
          <Col>
            <p>
              Your email is safe with us and we hate spam as much as you do.
            </p>
            <input
              className="w-75 d-block"
              type="text"
              placeholder="Enter your email here..."
            ></input>
            <br />
            <button className="btn btn-danger w-50 d-block">SUBSCRIBE</button>
          </Col>
        </Row>
        <hr className="text-secondary" />
        <p>COPYRIGHTS © 2016 PSD TO HTML ALL RIGHTS RESERVED.</p>
      </Container>
    );
};

export default Footer;