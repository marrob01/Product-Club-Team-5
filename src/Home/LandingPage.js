import React from 'react'
import PrimaryLandingComponent from './PrimaryLandingComponent';
import StateLandingComponent from './StateLandingComponent';
import FederalLandingComponent from './StateLandingComponent';
import Image from '../images/edle121.jpeg';

function Landingpage() {
    return (
        <div>
            <PrimaryLandingComponent/>


            <div> 
                <StateLandingComponent 
                image={Image} 
                headerOne="header one here" 
                headerThree="header three here" 
                paragraph=" lets gooooooo Lorem ipsum" 
                button="State"
                />

            </div>
        </div>
    )
}

export default Landingpage;
