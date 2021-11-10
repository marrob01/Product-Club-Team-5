import React, { useRef, useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const FederalRow = ({ federalContent }) => {
  // const [isAnimating, setIsAnimating] = useState(false);
  // const collapseRef = useRef(null);
  // const contentRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [expandNameContainer, setExpandNameContainer] = useState([])

 
  const handleClick = () => { };

  const handleTransition = () => { };


  const clickRightArrow = <IoIosArrowForward
    className="right-arrow" size="30px" color="grey"
    onClick={() => setExpandNameContainer(!expandNameContainer)}
  />

  const clickDownArrow = <IoIosArrowDown
    className="down-arrown" size="30px" color="grey"
    onClick={() => setExpandNameContainer(!expandNameContainer)}
  />




  return (
    // {console.log(content, 'getting the content')}

    <div className="accordion">

      {/* {console.log(federalContent)} */}
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{!isActive ? clickRightArrow : clickDownArrow}</div>
        <div>
          <h5 id="rname">{federalContent.Recepient_Name}</h5>
        </div>
      </div>
      {isActive &&
        <div className="accordion-content">
          {
            < ul className="data-list">
              <li>Recipent Name: {federalContent.Recepient_Name}</li>
              <li>City: {federalContent.City}</li>
              <li>Country: {federalContent.Country} </li>
              <li>CFDA Title: {federalContent.cfda_title}</li>
              <li>Funding Amount: {federalContent.Total_Award_Amount}</li>
              <li>Award ID: {federalContent.Award_Id}</li>
              <li>Award Description: {federalContent.award_description}</li>
              <li>Award Type: {federalContent.Award_Type}</li>
              <li>Start date: {federalContent.Start_Date}</li>
              <li >End date: {federalContent.End_Date}</li>
            </ul>
          }
        </div>
      }
    </div>
  );
}

export default FederalRow;