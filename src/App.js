import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import { Browser as Router, useHistory, Switch, Redirect, Route } from 'react-router-dom';
import LandingPage from './Home/LandingPage';

function App() {
  const [user, setUser] = useState(null)
  const [data,setData]=useState([])
  const [filteredDataList, setFilteredDataList]=useState([])
  const [searchInput, setSearchInput]=useState([])
  const history = useHistory()
  
  const getData=()=>{
    fetch('http://localhost:9000/skills'

    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        // console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])



  return (
    <div className="App">
      <Router>
            <Switch>
              <Route exact path='/' component={LandingPage}/>
            </Switch>
      </Router>
    </div>
  );
}

export default App;
