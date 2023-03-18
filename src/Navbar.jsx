import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <>
        <div className='navbar'>
        <div class ="rectangle"></div><div className='brandline'>Crystal Truong</div>
        <header>
             <nav>
                <ul>
                    <NavLink to="/" activeStyle={{ color: '#DA627D'}}>Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <a href="https://www.linkedin.com/in/crystal-truong-2334a2175/" target="_blank">Linkedin</a>
                </ul>
            </nav>
        </header>
        </div>
        </>
    );
};

export default Navbar;