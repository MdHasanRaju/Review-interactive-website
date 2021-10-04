import React from 'react';
import { ButtonGroup, Button, Col, Container, Row } from 'react-bootstrap';
import DefaultService from '../DefaultService/DefaultService';
import DefaultServiceContainer from '../DefaultServiceContainer/DefaultServiceContainer';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
      <div>
        <Container className="home">
          <Row>
            <Col sm={6}>
              <h1>
                <span className="text-info">A Powerful Course|</span>
              </h1>
              <h1>Website Template.</h1>
              <p>
                We're among one of the best Education Bootstrap template on the
                Envato marketplace to build a powerful online university
                websites. The team family is a small collection of designers and
                who have one thing in common - we all love coding.
              </p>
              <Button variant="success">Success</Button>

            </Col>
            <Col sm={6}>sm=4</Col>
          </Row>
          <DefaultServiceContainer></DefaultServiceContainer>
        </Container>
        
      </div>
    );
};

export default Home;