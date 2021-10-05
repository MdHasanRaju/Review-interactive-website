import React from 'react';
import { Container } from "react-bootstrap";
import './Contact.css';

const Contact = () => {
    return (
      <Container className="p-4 contact">
        <form role="form">
          <div className="form-group">
            <label for="email">Email address:</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" />
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-danger">
            Submit
          </button>
        </form>
      </Container>
    );
};

export default Contact;