import React from 'react'
import PrimaryLanding from './PrimaryLanding';
import StateLanding from './StateLanding';
import FederalLanding from './StateLanding';
import Image from '../images/edle121.jpeg';

function Landingpage() {
    return (
        <div>
            <PrimaryLanding/>


            <div> 
                <StateLanding 
                image={Image} 
                headerOne="header one here" 
                headerThree="header three here" 
                paragraph=" lets gooooooo Lorem ipsum" 
                button="State"
                />


                <FederalLanding 
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
