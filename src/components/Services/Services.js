import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])

    return (
        <div>
            <h2>Total Services:{services.length}</h2>
            <Row xs={1} md={2} className="g-4">
                {
                    services.map(service => <ServiceDetails 
                    key={service.id}
                    service={service}>
                    </ServiceDetails>)
                }
            </Row>
        </div>
    );
};

export default Services;