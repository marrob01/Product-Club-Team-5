import Image from '../images/edle121.jpeg'


function PrimaryLanding() {


    return (
        <div className="container">
            <div >
                <img src={Image} alt="I man being created by the almighty"/>
            </div>

            
            <div>
                <h3>ABOUT US</h3>
                <h1>Making it easy to research covid funding</h1>
                <p> Lorem ipsum ece villa rustiga</p>
                <button variant="outline-primary">More Info</button>
            </div>
    
            
        </div>
    )
}

export default PrimaryLanding;
