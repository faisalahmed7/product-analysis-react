import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../image/notfound.jpg'

const NotFound = () => {
    return (
        <div>
            <h1 className='text-4xl text-center font-mono mt-16 p-8'>The page you are looking for is not found!!!!!</h1>
            <div className='text-center mb-16'>
           <Link to='/' className='bg-green-500 text-white py-3 px-2 rounded-lg border '>
               Back To Home
           </Link>
           </div>

           <div className='flex justify-center'>
           <img src={notfound} alt="" />
           </div>

           
        </div>
    );
};

export default NotFound;