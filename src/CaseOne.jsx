//create a skeleton page for the case one including Navbar.js
import React from 'react';
import './case.css';

class CaseOne extends React.Component {
    render() {
        return (
            <div className='proj-grid'>
                <div class='overview-container'>
                    <h2>Retry feature</h2>
                    <h3>overview</h3>
                    <p>summary of the project</p>
                </div>
                <h2>Discovery</h2>
                <p>The feature was driven by many calls and NPS becoming top priority for delivery. 
                    Therefore user testing and extensive research could not be allocated in the discovery phase. I spent most of my time going through apps I frequently used that had the “retry feature” and analysed how they implemented this into their applications. 
                    Here is a snippet of competitor analysis that was done where we highlighted feasibility and how we could utilise the components in our design system to ensure a seamless experience. </p>
            </div>
        )
    }
}

export default CaseOne;