import React, { Component } from 'react';
import Navbar from './Navbar';
import './landingpage.css';

class LandingPage extends Component {
    render() {
        return (
            <>
            <div className='headline'>
              <Navbar />
              <h1>Crafting solutions < br/> for complex < br/> problems</h1>
            </div>
            <div>
                <h1>Case study 1</h1>
                <p>Aut numquam tempora ab officia aliquam sit voluptatem dolore sit quasi minus. In dolores laudantium
                 ea quia quod et vero sint quo delen< br/>
                iti explicabo sit debitis fugit. Non Quis quam et quia provident hic illo quis ab dolore excepturi.</p>
            </div>
            </>
  
        )
    }
}

export default LandingPage;
