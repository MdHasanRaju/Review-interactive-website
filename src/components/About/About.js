import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
      <Container className="text-center about">
        <h2>Welcome to the BeSkilled Learning Management System</h2>
        <Row md={2} className="text-center px-2">
          <Col>
            <p className="text-start">
              <small>
                English is a West Germanic language of the Indo-European language family, originally spoken by the inhabitants of early medieval England.[3][4][5] It is named after the Angles, one of the ancient Germanic peoples that migrated to the area of Great Britain that later took their name, England. Both names derive from Anglia, a peninsula on the Baltic Sea which is not to be confused with East Anglia, the Eastern part of England which comprises the counties of Norfolk, Suffolk and Essex. English is most closely related to Frisian and Low Saxon, while its vocabulary has been significantly influenced by other Germanic languages.
              </small>
            </p>
          </Col>
          <Col>
            <p className="text-start">
              <small>
                English is the most spoken language in the world[13] and the third-most spoken native language in the world, after Standard Chinese and Spanish.[14] It is the most widely learned second language and is either the official language or one of the official languages in almost 60 sovereign states. There are more people who have learned English as a second language than there are native speakers. As of 2005, it was estimated that there were over 2 billion speakers of English.[15] English is the majority native language in the United States, the United Kingdom, Canada, Australia etc.New Zealand and Ireland, an official language.
              </small>
            </p>
          </Col>
        </Row>
      </Container>
    );
};

export default About;