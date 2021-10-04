import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
      <div className="footer">
        <Container className="mt-3">
          <Row>
            <Col>
              <p>PSD TO HTML</p>
              <p>TEMPLATES</p>
              <p>DOCUMENTATION</p>
              <p>GET A SUPPORT</p>
              <p>AFFILIATE</p>
            </Col>
            <Col>
              <p>BLOG</p>
              <p>TERMS OF USAGE</p>
              <p>PRIVACY POLICY</p>
              <p>PRICING & PLAN</p>
              <p>BECOME A TRAINER</p>
            </Col>
            <Col>
              <p>
                <i class="fab fa-twitter"></i> TWITTER
              </p>
              <p>
                <i class="fab fa-facebook"></i> FACEBOOK
              </p>
              <p>
                <i class="fab fa-google-plus"></i> GOOGLE PLUS
              </p>
              <p>
                <i class="fab fa-pinterest"></i> PINTEREST
              </p>
              <p>
                <i class="fab fa-dribbble"></i> DRIBBBLE
              </p>
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
          <p>COPYRIGHTS © 2021 LEARN ENGLISH ALL RIGHTS RESERVED.</p>
        </Container>
      </div>
    );
};

export default Footer;