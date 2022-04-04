import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { faStar } from '@fortawesome/free-solid-svg-icons'

const ReviewDetails = ({review}) => {
    
    const{name,description,img,ratings}=review
    return (
        <div className='bg-green-100 rounded-lg p-4 w-72 h-72 text-justify'>
            <div className='flex justify-center'>
            <img className='rounded-full w-10 h-10' src={img} alt=''></img>
            </div>
            <div>
            <h5 className='text-xl font-mono text-center mt-5 mb-3'> {name}</h5>
            <p className='text-left font-serif'>{description}</p>
            <p>{ratings}: <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon icon={faStar}>
                </FontAwesomeIcon> <FontAwesomeIcon icon={faStar}>
                </FontAwesomeIcon> <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                 </p>
            

            </div>
            
        </div>
    );
};

export default ReviewDetails;