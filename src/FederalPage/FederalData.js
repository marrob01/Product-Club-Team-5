import React, {useMemo, useState, useEffect} from 'react';
import {IoIosArrowForward, IoIosArrowDown} from 'react-icons/io'
import './FederalData.css';


function FederalData() {

    const [federalData, setFederalData] = useState([]);
    const [expandNameContainer, setExpandNameContainer] = useState([]);

    const getFederalData = () => { 
    fetch('http://localhost:9000/federal'   
  
    ,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setFederalData(myJson)
      });
  }

    useEffect(()=>{
        getFederalData()
    },[])



      const clickRightArrow = <IoIosArrowForward
      className="right-arrow" size="30px" color="#3C64B1"
      onClick={() => setExpandNameContainer(!expandNameContainer)}
      />

      const clickDownArrow = <IoIosArrowDown
      className="down-arrown" size="30px" color="#3C64B1"
      onClick={() => setExpandNameContainer(!expandNameContainer)}
      />
  
      const closeNameContainer = () => setExpandNameContainer(false);


    const federalMap = federalData.map((federal, i) => {
        return (
            <div key={i} className="recipient-container">

                  <div id="individual-recipient-container"> 
                      <div id="recipient-name-section">
                        <div>
                            {expandNameContainer ? clickDownArrow: clickRightArrow}
                            {/* {expandNameContainer } */}
                        </div>

                            <h2>{federal.grant.recipientName}</h2>
                      </div>
                      
                      <ul>     
                          <li>{federal.grant.awardAmount}</li>
                          <li>{federal.grant.awardType}</li>
                          <li>{federal.grant.startDate}</li>
                          <li>{federal.grant.endDate}</li>
                          <li>{federal.grant.County}</li>
                          <li>{federal.grant.City}</li>
                          <li>{federal.grant.CovidObligations}</li>
                      </ul>
                  </div>
            </div>
        )
    })


    return (
        <div className="federal-container">
          <div id="federal-header-container">
            <h1 id="federal-header">ADVANCED FEDERAL DATA SEARCH</h1>
          </div>

          
          <div className="federal-data-container">
                <div>
                </div>

                <div id="data-table-container">
                        <div id="header">
                            <h1>Select</h1>
                            <h1>Name</h1>
                        </div>
                    {federalMap}
                </div>
            </div>
        </div>
    )
}

export default FederalData;
