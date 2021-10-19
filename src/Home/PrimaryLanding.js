import Image from '../images/edle121.jpeg';
import './PrimaryLanding.css';


function PrimaryLanding() {


    return (
        <div className="container">
            <div>
                <img 
                src={Image} 
                alt="I man being created by the almighty"
                id="image"
                />
            </div>

            
            <div>
                <h3 className="content">ABOUT US</h3>
                <h1 className="content">Making it easy to research covid funding.</h1>
                <p className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button className="content" id="primary-button">More Info</button>
            </div>
    
            
        </div>
    )
}

export default PrimaryLanding;
