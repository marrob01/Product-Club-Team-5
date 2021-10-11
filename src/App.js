
import { useState, useEffect } from 'react'
import { BrowserRouter, useHistory, Switch, Redirect, Route } from 'react-router-dom';
import LandingPage from './Home/LandingPage';
import './style/App.css';
import Contact from './Contactpage/Contact';

function App() {
  const [user, setUser] = useState(null)
  const [data,setData]=useState([])
  const [filteredDataList, setFilteredDataList]=useState([])
  const [searchInput, setSearchInput]=useState([])
  const history = useHistory()
  
  // const getData=()=>{
  //   fetch('http://localhost:9000/skills'

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

      <BrowserRouter>
            <Switch>
              <Route exact path='/' component={LandingPage}/>
            </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
