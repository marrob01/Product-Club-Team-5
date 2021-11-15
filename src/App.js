
import './style/App.css'
import './Contactpage/Contact.css'
import Footer from './Global/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Global/Nav.js'

import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from './Home/LandingPage';
import './StatePage/StateData.css'
import Contact from './Contactpage/Contact';
import StateData from './StatePage/StateData';
import FederalData from './FederalPage/FederalData';
import About from './About/About';
import './About/About.css';



function App(props) {

 



  return (
    <div className="App">
        <BrowserRouter >
          <Navigation />

          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path="/about" component={About} />
            <Route exact path="/state" component={StateData}/>
            <Route exact path="/federal" component={FederalData} />
            <Route exact path="/contact" component={Contact} />
          </Switch>

          <Footer />
        </BrowserRouter >
        
    </div>
  );
}

export default App;
