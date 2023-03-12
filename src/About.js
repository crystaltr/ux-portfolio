import React, { Component } from 'react';
import Navbar from './Navbar';

class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1>About me</h1>
                <p>Hi my name is Crystal!</p>
            </div>
        )
    }
}

export default About;