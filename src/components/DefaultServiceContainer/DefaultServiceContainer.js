import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import DefaultService from '../DefaultService/DefaultService';

const DefaultServiceContainer = () => {
    const [dftService, setDftService] = useState([])

    // data fetching for keeping 4 services default in home page
    useEffect( () => {
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => setDftService(data))
    } ,[])

    return (
        <Row xs={1} md={2} className="g-4">
                {
                    dftService.slice(0, 4).map(service => <DefaultService key={service.name} service={service}></DefaultService>)
                }
        </Row>
    );
};

export default DefaultServiceContainer;