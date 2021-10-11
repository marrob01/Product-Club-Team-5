import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import Nava from './Nav.js'
import Test from './Test.js'
import { BrowserRouter,  Router, Switch, Route } from "react-router-dom";


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
          <Nava />

          <Switch>
            <Route exact path="/test" component={Test} />
            {/* <Route exact path="/about" component={About} />
            <Route exact path="/state" component={StateData} />
            <Route exact path="/federal" component={FederalData} />
            <Route exact path="/test" component={Contact} /> */}


          </Switch>

        </BrowserRouter >
      TEAM 5 Rocks!
    </div>
  );
}

export default App;
