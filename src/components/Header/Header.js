import React from 'react';
import CustomActiveLink from '../CustomActiveLink/CustomActiveLink';

const Header = () => {
    return (
        <nav className='flex flex-col justify-center items-center mt-8 p-6 font-mono text-xl  md:flex-row '>
            <CustomActiveLink to='/'>Home</CustomActiveLink>
            <CustomActiveLink to='/reviews'>Reviews</CustomActiveLink>
            <CustomActiveLink to='/dashboard'>Dashboard</CustomActiveLink>
            <CustomActiveLink to='/blogs'>Blogs</CustomActiveLink>
            <CustomActiveLink to='/about'>About</CustomActiveLink>
            
        </nav>
    );
};

export default Header;