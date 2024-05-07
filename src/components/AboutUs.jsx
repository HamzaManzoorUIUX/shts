import React from 'react';
import img1 from '../assets/images/1.jpg'
const AboutUs = () => {
    return (
        <div className='container py-5 my-5'>
            <h3 className='text-center mb-5'>
                About us
            </h3>
            <div className="row">
                <div className="col-md-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorum eum voluptate, vitae aut perferendis eligendi possimus numquam sapiente maiores! Quasi nulla facilis est quos iusto, obcaecati veniam aliquid in!
                </div>
                <div className="col-md-6">
                    <img src={img1} alt="img" className='w-100' />
                    </div>
            </div>
        </div>
    );
};

export default AboutUs;