import React, { useRef, useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import "./FederalData.css";
import { Link } from "react-router-dom";
import FederalRow from "./FederalRow";

function FederalData() {
  const [federalData, setFederalData] = useState([]);
  const [expandNameContainer, setExpandNameContainer] = useState([]);
  const [show, setShow] = useState(true);

  const getFederalData = async () => {
    await fetch(
      "http://localhost:9000/federal",

      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setFederalData(myJson);
      });
  };

  useEffect(() => {
    getFederalData();
  }, []);

  const clickRightArrow = (
    <IoIosArrowForward
      className="right-arrow"
      size="30px"
      color="gray"
      onClick={() => setExpandNameContainer(!expandNameContainer)}
    />
  );

  const clickDownArrow = (
    <IoIosArrowDown
      className="down-arrown"
      size="30px"
      color="gray"
      onClick={() => setExpandNameContainer(!expandNameContainer)}
    />
  );

  const closeNameContainer = () => setExpandNameContainer(false);


 

  // const federalMap = () => {
  //   return (
      
      // <div key={i} className="recipient-container">
      //   <div id="individual-recipient-container">
      //     <div id="recipient-name-section">
      //       <div>
      //         {expandNameContainer ? clickDownArrow : clickRightArrow}
      //         {expandNameContainer ? (
      //           <ul>
      //             <h5 id="federal-recipient-name-header">
      //               {federal.Recepient_Name}  
      //             </h5>
      //             <li>{federal.cfda_title}</li>
      //             <li>{federal.award_description}</li>
      //             <li>{federal.Total_Award_Amount}</li>
      //             <li>{federal.City}</li>
      //             <li>{federal.Start_Date}</li>
      //             <li>{federal.End_Date}</li>
      //             <li>{federal.Covid_Obligations}</li>
      //           </ul>
      //         ) : (
      //           null
      //         )}

      //       </div>
            
      //       {expandNameContainer ? null : (
      //         <div>
      //           <h5 id="federal-recipient-name-header">
      //             {federal.Recepient_Name}
      //           </h5>
      //         </div>
      //       )}
      //     </div>
      //   </div>
      // </div>
      
  // )};
  // });

  return (
    <div className="federal-container">
      <div id="federal-header-container">
        <h1 id="federal-header">ADVANCED FEDERAL DATA SEARCH</h1>
      </div>

      <div className="federal-data-container">
        <div className="federal-filter-container"></div>

        <div id="data-table-container">
          <div>
            <h3 className="spending-name-prime-award">SPENDING BY PRIME AWARD</h3>
          </div>
          <div id="header">
            <h3 className="table-header">Select</h3>
            <h3 className="table-header">Name</h3>
          </div>
          {<div>
      {federalData.map((content, i) => {
         return (
           <div key={i}> 
         <FederalRow
          content={content}
          />
          </div>
         )
          
      })}
      </div>}
        </div>
      </div>
    </div>
  );
}

export default FederalData;
