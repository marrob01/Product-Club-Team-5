import React, { useRef, useState } from "react";
import StateData from "../StatePage/StateData";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const FederalRow = ({ content }) => {
  // const [isAnimating, setIsAnimating] = useState(false);
  // const collapseRef = useRef(null);
  // const contentRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
 

  const handleClick = () => {};

  const handleTransition = () => {};
       
  return (
    // {console.log(content, 'getting the content')}
    
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>
           
            {isActive ? (
              <IoIosArrowDown
                className="down-arrown"
                size="30px"
                color="gray"
              />
            ) : (
              <IoIosArrowForward
                className="right-arrow"
                size="30px"
                color="gray"
              />
            )}
          </div>
          {isActive && <div className="accordion-data"></div>}
          <div>{content.Recepient_Name}</div>
        </div>
      </div>
    </div>
  );
}

export default FederalRow;
