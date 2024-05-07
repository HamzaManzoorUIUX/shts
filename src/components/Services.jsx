import React from 'react';
import ServiceCard from './ServiceCard';
import paint from '../assets/images/Painter.jpg'
import Electrician from '../assets/images/Electrician.jpg'
import Plumber from '../assets/images/Plumber.jpg'
const Services = () => {
    const data = [
        {
            title: "painter",
            img: paint,
        },
        {
            title: "Electrician",
            img: Electrician,
        },
        {
            title: "Plumber",
            img: Plumber,
        },
    ]
    return (
        <div className='container py-5'>
            <h3 className='text-center mb-5'>Services</h3>
            <div className="row">
                {
                    data.map(obj => <ServiceCard data={obj} />)
                }

            </div>
        </div>
    );
};

export default Services;