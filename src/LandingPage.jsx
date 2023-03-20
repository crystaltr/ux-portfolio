import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './landingpage.css';
import retry from './retry.png';
import payment from './payment.png';
import chev from './chev.png';

class LandingPage extends Component {
    render() {
        return (
            <>
            <div className='title'>
              <h1>Intentional designs for < br/> everyday use</h1>
            </div>
            <div class="rect-container">
                <div class="rect-item"></div>
                <div class="rect-item"></div>
                <div class="rect-item"></div>
                <div class="rect-item"></div>
                <div class="rect-item"></div>
                <div class="rect-item"></div>
                <div class="rect-item"></div>
                <div class="rect-item"></div>
            </div>
            <div className='p1-grid'>
                <img src={retry} alt="retry" class='img1'/>
                <div className='p1-description'>
                <h1>Retry feature</h1>
                <p>Giving users the ability to retry payments within the portal</p>
                <Link to="/case1" className="p1-btn"><b>View project</b> <img src={chev} width="25" height="25"/></Link>
                </div>
            </div>

            <div className='p1-grid'>
                <div className='p2-description'>
                    <h1>Payment redesign</h1>
                    <p>Giving users the ability to retry payments within the portal</p>
                </div>
                <img src={payment} alt="payment" class='img2'/>
            </div>
            </>
        )
    }
}

export default LandingPage;
