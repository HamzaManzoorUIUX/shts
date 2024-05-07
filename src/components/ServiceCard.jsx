import React from 'react';

const ServiceCard = ({ data }) => {
    return (
        <div className='col-md-4'>
            <div className="my-service-card">
                <div className="my-service-card-hover">
                    <h5>
                        {
                            data.title
                        }
                    </h5>
                </div>
                <img src={data.img} alt={data.title} className='w-100' />
            </div>
        </div>
    );
};

export default ServiceCard;