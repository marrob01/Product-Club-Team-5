import React, { useRef, useState } from "react";
import StateData from "../StatePage/StateData";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const FederalRow = ({ federalContent }) => {
  // const [isAnimating, setIsAnimating] = useState(false);
  // const collapseRef = useRef(null);
  // const contentRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [expandNameContainer, setExpandNameContainer] = useState([])
 

  const handleClick = () => {};

  const handleTransition = () => {};


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
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>{!isActive ? clickRightArrow: clickDownArrow}</div>
                <div>
                    <h5 id="rname">{federalContent.Recepient_Name}</h5>
                </div>
            </div>
            {isActive &&
                <div className="accordion-content">
                    {
                        < ul>
                            <li className="recipientNumber">Recipent Name: {federalContent.Recepient_Name}</li>
                            <li className="cfda">City: {federalContent.Richmond}</li>
                            <li className="awardId">Country: {federalContent.Country} </li>
                            <li className="starliate">Funding Amount: {federalContent.Total_Award_Amount}</li>
                            <li className="county">Award Description: {federalContent.award_description}</li>
                            <li className="awardAmount">Award Type: {federalContent.award_Type}</li>
                            <li className="awardType">Start date: {federalContent.Start_Date}</li>
                            <li className="awardType">End date: {federalContent.End_Date}</li>
                        </ul>
                    }
                </div>
            }
    </div>
  );
}

export default FederalRow;
