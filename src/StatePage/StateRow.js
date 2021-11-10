import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';

const StateRow = ({ state }) => {
    const [isActive, setIsActive] = useState(false)
    const [expandNameContainer, setExpandNameContainer] = useState(false);

    const clickRightArrow = <IoIosArrowForward
        className="right-arrow" size="30px" color="grey"
        onClick={() => setExpandNameContainer(!expandNameContainer)}
    />

    const clickDownArrow = <IoIosArrowDown
        className="down-arrown" size="30px" color="grey"
        onClick={() => setExpandNameContainer(!expandNameContainer)}
    />

    // console.log(state);
    return (
        <div className="state-accordion-item">
            <div className="state-accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>{!isActive ? clickRightArrow: clickDownArrow}</div>
                <div>
                    <h5 id="rname">{state.Grantee_Name}</h5>
                </div>
            </div>
            {isActive &&
                <div className="state-accordion-content">
                    {
                    < ul className="data-list">
                            <li className="recipientNumber">Grantee Name: {state.Grant_Number}</li>
                            <li className="cfda">Program Name: {state.Program_Name}</li>
                            <li className="awardId">City: {state.City} </li>
                            <li className="starliate">State: {state.State}</li>
                            <li className="county">County: {state.County}</li>
                            <li className="awardAmount">Award Fiscal Year: {state.Award_Fiscal_Year}</li>
                            <li className="awardType">Award Funding: {state.Award_Funding}</li>
                        </ul>
                    }
                </div>
            }
        </div>
    );
};

export default StateRow;