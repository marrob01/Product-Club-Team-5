import React from 'react';
import './StateData.css'
import { useState, useEffect } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io'



function StateData() {

    const [stateData, setStateData] = useState([])
    const [expandNameContainer, setExpandNameContainer] = useState(false);

    const getStateData = async () => {
        await fetch('http://localhost:9000/state'

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

    const clickRightArrow = <IoIosArrowForward
        className="right-arrow" size="30px" color="#3C64B1"
        onClick={() => setExpandNameContainer(!expandNameContainer)}
    />

    const clickDownArrow = <IoIosArrowDown
        className="down-arrown" size="30px" color="#3C64B1"
        onClick={() => setExpandNameContainer(!expandNameContainer)}
    />

    // const closeNameContainer = () => setExpandNameContainer(false);

    const stateMap =
        stateData.map((state, i) => {
            return (
                <div key={i} className="state-recipient-container">
                    <div id="state-recipient-name-section">
                        <div id="state-individual-recipient-container">
                            <div id="state-recipient-container-body">
                                {expandNameContainer ? clickDownArrow : clickRightArrow }
                                {expandNameContainer ? 
                                    
                                    <ul>
                                        <h5 id="rname">{state.Grantee_Name}</h5>
                                        <li className="recipientName">{state.Grantee_Name}</li>
                                        <li className="recipientName">{state.Grant_Number}</li>
                                        <li className="cfda">{state.Program_Name}</li>
                                        <li className="awardId">{state.City} </li>
                                        <li className="starliate">{state.State}</li>
                                        <li className="county">{state.County}</li>
                                        <li className="awardAmount">{state.Award_Fiscal_Year}</li>
                                        <li className="awardType"> {state.Award_Funding}</li>
                                    </ul>
                                    : 
                                clickRightArrow
                                ?
                                <div><h5 id="rname" style={{marginLeft:"12%"}}>{state.Grantee_Name}</h5></div>
                                  :  null
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        )





    return (
        <div className="state-container">
            <div className="state-header-container">
                <h1 className="state-header">ADVANCE STATE DATA SEARCH</h1>
            </div>
            <div className="spa">
                <h5> spending prime award</h5>
            </div>
            <div className="state-data-container">
                <div className="state-data-table-container">
                    <div id="state-header">
                        <h3>Select</h3>
                        <h3 className="name">Name</h3>
                    </div>
                    <div className="state-data">
                        {stateMap}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StateData
