import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
      <Container className="text-center">
        <h2>Welcome to the EduPress Learning Management System</h2>
        <Row md={2} className="text-center">
          <Col>
            <p>
              <small>
                A posuere donec senectus suspendisse bibendum magna ridiculus a
                justo orci parturient suspendisse ad rhoncus cursus ut
                parturient viverra elit aliquam ultrices est sem. Tellus nam ad
                fermentum ac enim est duis facilisis congue a lacus adipiscing
                consequat risus consectetur scelerisque integer suspendisse a
                mus integer elit massa ut. Nam vehicula malesuada lectus,
                interdum fringilla nibh.
              </small>
            </p>
          </Col>
          <Col>
            <p>
              <small>
                A posuere donec senectus suspendisse bibendum magna ridiculus a
                justo orci parturient suspendisse ad rhoncus cursus ut
                parturient viverra elit aliquam ultrices est sem. Tellus nam ad
                fermentum ac enim est duis facilisis congue a lacus adipiscing
                consequat risus consectetur scelerisque integer suspendisse a
                mus integer elit massa ut. Nam vehicula malesuada lectus,
                interdum fringilla nibh. Duis aliquam vitae metus a pharetra.
              </small>
            </p>
          </Col>
        </Row>
      </Container>
    );
};

export default About;