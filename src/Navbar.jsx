import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <>
        <div className='navbar'>
        <div class ="rectangle"></div><div className='brandline'>Crystal Truong</div>
        <header>
             <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <a href="https://www.linkedin.com/in/crystal-truong-2334a2175/" target="_blank">Linkedin</a>
                </ul>
            </nav>
        </header>
        </div>
        </>
    );
};

export default Navbar;