import React from 'react'
import PrimaryLanding from './PrimaryLanding';
import FederalLanding from './StateLanding';
import StateLanding from './StateLanding';
import federalImage from '../images/financial.png';
import stateImage from '../images/analysis.png';
import './LandingPage.css';

function Landingpage() {
    return (
        <div className='home-container'>
            <div className="first-section-container">
            <PrimaryLanding/>
            </div>
            <div className="second-section-container"> 
                <FederalLanding 
                image={federalImage} 
                headerOne="Federal Government Allocation Process" 
                headerThree="Federal" 
                paragraph="Here you can find the process the Federal govenment takes when allocating funds to various States during this period of COVID-19." 
                button="Federal Data"
                />


                <StateLanding 
                image={stateImage} 
                headerOne="How The State Government Shares The COVID-19 Funds" 
                headerThree="State" 
                paragraph="The way the State government shares the COVID-19 Funds from the government to public institutions can be found here." 
                button="State Data"
                />
                

            </div>
        </div>
    )
}

export default Landingpage;
