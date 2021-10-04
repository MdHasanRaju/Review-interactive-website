import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Contact.css';

const Contact = () => {
    return (
      <Container className="p-4 contact">
        <form role="form">
          <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" class="form-control" id="email" />
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd" />
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit" class="btn btn-danger">
            Submit
          </button>
        </form>
      </Container>
    );
};

export default Contact;