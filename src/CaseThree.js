//create a skeleton page for the case one including Navbar.js
import React from 'react';
import Navbar from './Navbar';

class CaseThree extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1>Case study #2</h1>
                <p>Case One</p>
            </div>
        )
    }
}

export default CaseThree;