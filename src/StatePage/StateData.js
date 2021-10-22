import React from 'react';
import { useState, useEffect } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io'



function StateData() {

    const [stateData, setStateData] = useState([])
    const [expandNameContainer, setExpandNameContainer] = useState([]);

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

    const closeNameContainer = () => setExpandNameContainer(false);

    const stateMap =
        stateData.map((state, i) => {
            return (
                <div>
                    <div key={i} className="recipient-container">

                        <div id="recipient-name-section">
                            {expandNameContainer ? clickDownArrow : clickRightArrow}

                            <h2 className="rname">{state.grant.recipientName}</h2>
                        </div>
                        <div>
                            {expandNameContainer ? clickDownArrow : clickRightArrow}
                            {expandNameContainer ? (
                        <ul>
                            <li className="recipientName">{state.grant.recipientName}</li>
                            <li className="awardId">{state.grant.awardID} </li>
                            <li className="starliate">{state.grant.starliate}</li>
                            <li className="endDate"> {state.grant.endDate}</li>
                            <li className="county">{state.grant.County}</li>
                            <li className="city">{state.grant.City}</li>
                            <li className="covidObligations">{state.grant.covidObligations}</li>
                            <li className="awardAmount">{state.grant.awardAmount}</li>
                            <li className="awardType"> {state.grant.awardType}</li>
                        </ul>
                            ) : (
                                ""
                            )}
                        </div>
                        {/* <div>
                            {expandNameContainer ? clickDownArrow : clickRightArrow}
                            {expandNameContainer ? (
                        <ul>
                            <li>{state.directPayment.recipientName}</li>
                            <li className="awardId">{state.directPayment.awardID} </li>
                            <li className="starliate">{state.directPayment.starliate}</li>
                            <li className="endDate"> {state.directPayment.endDate}</li>
                            <li className="state">{state.directPayment.State}</li>
                            <li className="county">{state.directPayment.County}</li>
                            <li className="city">{state.directPayment.City}</li>
                            <li className="covidObligations">{state.directPayment.covidObligations}</li>
                            <li className="awardAmount">{state.directPayment.awardAmount}</li>
                            <li className="awardType"> {state.directPayment.awardType}</li>
                        </ul>
                        ) : (
                        ""
                            )}
                    </div> */}
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
            <div className="state-data-container">
                <div></div>
                <div className="data-table-container">
                    <div id="header">
                        <h3>Select</h3>
                        <h3 className="name">Name</h3>
                        <h5 className="spa"> spending prime award</h5>
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
