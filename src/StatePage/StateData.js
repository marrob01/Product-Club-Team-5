import React from 'react';
import {useState, useEffect} from 'react';


function StateData() {

    const [stateData, setStateData] = useState([])

    const getStateData = () => {
        fetch('http://localhost:9000/state'

            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setStateData(myJson)
            });
    }
    useEffect(() => {
        getStateData()
    }, [])

    const stateMap = 
        stateData.map((state, i) => {
          return (
                <div key={i}>
                    <ul>
                        <li>{state.grant.recipientName}</li>
                        <li className="awardId">{state.grant.awardID} </li>
                        {/* <li className */}
                    </ul>
                </div>
         )}
         )
     
           
    return (
        <div>
            <div className="state-header">
            <header>ADVANCE STATE DATA SEARCH</header>
            </div>
            <div className="state-data">
                {stateMap}
                </div>
        </div>
    )
}

export default StateData
