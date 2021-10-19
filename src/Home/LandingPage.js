import React from 'react'
import PrimaryLanding from './PrimaryLanding';
import StateLanding from './StateLanding';
import FederalLanding from './StateLanding';
import Image from '../images/edle121.jpeg';
import './LandingPage.css';

function Landingpage() {
    return (
        <div className='home-container'>
            <div className="first-section-container">
            <PrimaryLanding/>
            </div>
            <div className="second-section-container"> 
                <StateLanding 
                image={Image} 
                headerOne="State" 
                headerThree="Search funding by State" 
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                button="State Data"
                />


                <FederalLanding 
                image={Image} 
                headerOne="Federal" 
                headerThree="Search Funding by Federal" 
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
                button="Federal Data"
                />
                

            </div>
        </div>
    )
}

export default Landingpage;
