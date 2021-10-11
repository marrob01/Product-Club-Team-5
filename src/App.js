
import './style/App.css'
import Footer from './Global/Footer'
import { useState, useEffect } from 'react'
import { Route, useHistory, Switch, Redirect } from 'react-router-dom'

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
      TEAM 5 Rocks!
      <Footer />
    </div>
  );
}

export default App;
