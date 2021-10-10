import LandingPageVideo from '../Videos/bacteriaBlue.mp4';


function PrimaryLandingComponent() {


    return (
        <div className="container">
            <div >
                <video autoPlay loop muted>
                    <source src={LandingPageVideo} type="video/mp4"/>
                </video> 
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

export default PrimaryLandingComponent;
