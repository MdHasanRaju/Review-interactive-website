import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import DefaultService from '../DefaultService/DefaultService';
import Home from '../Home/Home';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [services, setServices] = useState([]);

    // data fetching for services route
    useEffect(() => {
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])

    return (
        <Container className="py-4">
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