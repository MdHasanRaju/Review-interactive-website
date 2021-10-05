import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../images/404error2.png' 

const NotFound = () => {
    return (
      <Container className="text-center py-2 bg-light">
          <img className="w-75" src={img} />
      </Container>
    );
};

export default NotFound;