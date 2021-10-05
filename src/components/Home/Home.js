import React from 'react';
import {  Button, Col, Container } from 'react-bootstrap';
import DefaultServiceContainer from '../DefaultServiceContainer/DefaultServiceContainer';
import './Home.css';

const Home = () => {
    return (
      <div className="pb-4">
        <div className="banner">
          <Container className="home">
            <div>
              <Col sm={6}>
                <h1>
                  <span className="text-info">A Powerful Course|</span>
                </h1>
                <h1>Effective English Lessons.</h1>
                <p>
                  We're among one of the best Education era on the global marketplace to build a powerful online university websites. To make you literate in English we work together. The team family is a small collection of designers and who have one thing in common - we all love teaching.
                </p>
                <Button variant="success">Get Details</Button>
              </Col>
              <Col sm={6}></Col>
            </div>
          </Container>
        </div>,
        <Container>
          <DefaultServiceContainer></DefaultServiceContainer>
        </Container>
      </div>
    );
};

export default Home;