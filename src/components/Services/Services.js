import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])

    return (
        <Container>
            <h2 className="text-center">Total Services:{services.length}</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <ServiceDetails 
                    key={service.id}
                    service={service}>
                    </ServiceDetails>)
                }
            </Row>
        </Container>
    );
};

export default Services;