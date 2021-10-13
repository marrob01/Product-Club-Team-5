
import './style/App.css'
import './Contactpage/Contact.css'
import Footer from './Global/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Global/Nav.js'
import Test from './Test.js'
import { BrowserRouter,  Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import LandingPage from './Home/LandingPage';
import Contact from './Contactpage/Contact.js';
import About from './About/About.js';
import './About/About.css';
import StateData from './StatePage/StateData.js';
import FederalData from './FederalPage/FederalData.js';

function App() {
  const [user, setUser] = useState(null)
  const [data,setData]=useState([])
  const [filteredDataList, setFilteredDataList]=useState([])
  const [searchInput, setSearchInput]=useState([])
  // const history = useHistory()

  // const getData=()=>{
  //   fetch('http://localhost:9000/skills'
  //
  //   ,{
  //     headers : {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   }
  //   )
  //     .then(function(response){
  //       // console.log(response)
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       console.log(myJson);
  //       setData(myJson)
  //     });
  // }
  // useEffect(()=>{
  //   getData()
  // },[])



  return (
    <div className="App">
        <BrowserRouter >
          <Navigation />

          <Switch>
            <Route exact path='/' component={LandingPage}/>

            <Route exact path="/about" component={About} />
            <Route exact path="/state" component={StateData} />
            <Route exact path="/federal" component={FederalData} />
            <Route exact path="/contact" component={Contact} />
          </Switch>

          <Footer />
        </BrowserRouter >

    </div>
  );
}

export default App;
