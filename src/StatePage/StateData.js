import React from 'react';
import './StateData.css'
import { useState, useEffect } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io'
import StateRow from './StateRow';
import StateFilterUI from './StateFilterUI';



function StateData(props) {

    const [stateData, setStateData] = useState([])
    const [expandNameContainer, setExpandNameContainer] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const {filter} = props

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
                // console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                // console.log(myJson);
                setStateData(myJson)
            });
    }

    useEffect(() => {
        getStateData()
    }, [])


    const clickRightArrow = <IoIosArrowForward
        className="right-arrow" size="30px" color="grey"
        onClick={() => setExpandNameContainer(!expandNameContainer)}
    />

    const clickDownArrow = <IoIosArrowDown
        className="down-arrown" size="30px" color="grey"
        onClick={() => setExpandNameContainer(!expandNameContainer)}
    />

    return (
        <div className="state-content-container">
            <div className="state-header-container">
                <h1 className="state-header">ADVANCE STATE DATA SEARCH</h1>
            </div>
            <div className="spa">
                <h5> SPENDING PRIME AWARD</h5>
            </div>
            <StateFilterUI filter={filter} />
            <div className="state-data-container">
                <div className="state-data-table-container">
                    <div id="state-header">
                        <h3 className="select">Select</h3>
                        <h3 className="name">Name</h3>
                    </div>
                    <div className="state-data">
                        {stateData.map((state) => {
                            // console.log(state);
                            return (
                                <div>
                                    <StateRow 
                                    state={state} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StateData
