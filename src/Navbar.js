import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
             <nav>
                <ul>
                    <Link to="/">Home</Link> <br></br>
                    <Link to="/about">About</Link>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;