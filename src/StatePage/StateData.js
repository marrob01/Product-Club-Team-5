import React from 'react';
import './StateData.css'
import { useState, useEffect } from 'react';
import StateRow from './StateRow';
import StateFilterUI from './StateFilterUI';


function StateData() {
   
    const [stateData, setStateData] = useState([])
    const [pageNumber, setPageNumber] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(0)
    const [valueInput, setValueInput] = useState("");
    
    const pages = new Array(numberOfPages).fill(null).map((n, i) => i);

    const filters = ["Grantee Name", "Grant Number", "Program Name", "City", "County", "State", "Award Fiscal Year", "Award funding"]

    const getStateData = async (urlParams) => {
        await fetch(`http://localhost:9000/state?pageSize=&page=${pageNumber}${urlParams}`


            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(({ totalPages, states }) => {
                console.log(totalPages, states);
                setStateData(states);
                setNumberOfPages(totalPages);
            });
    }

    const handleSearchInput = (e) => {
        setValueInput(e.target.value)
        console.log(valueInput);
    }

    useEffect(() => {
        getStateData("")
    }, [pageNumber])

    const getResultData = (e) => {
        let urlParams = ""
        Object.keys(e.target).forEach(input => {
            const name = e.target[input].name
            const value = e.target[input].value
            if (name && value) {
                console.log(value, name);
                const param = `${name}=${value}`
                urlParams += `&${param}`
            }

        })
        getStateData(urlParams)
        e.preventDefault()
    }

    return (
        <div className="state-content-container">
            <div className="state-content-flex">
                <div className="state-header-container">
                    <h1 className="state-page-header">ADVANCE STATE DATA SEARCH</h1>
                </div>
                <div>
                    <h3 id="header-description">SPENDING BY PRIME AWARD</h3>
                </div>
            </div>
            <div className="state-data-container">
                <div className="state-filter-container">
                    <div className="filter-component">
                        <div className="filter-header">
                            <h5 >FILTERS</h5>
                            <hr />
                        </div>
                        <form className="filter" onSubmit={getResultData}>
                            {filters.map((stateList, i) => {
                                return (
                                    <div key={i}>
                                        <StateFilterUI stateList={stateList} state={stateData} valueInput={valueInput} onChange={handleSearchInput} />
                                    </div>
                                )
                            })}
                            <div className="filter-submit-btn">
                                <button className="state-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="state-data-table-container">
                    <div id="state-header">
                        <h3 className="select">Select</h3>
                        <h3 className="name">Name</h3>
                    </div>
                    {
                        <div className="state-data">
                            {stateData.map((state, i) => {
                                // console.log(state);
                                return (
                                    <div key={i}>
                                        <StateRow
                                            state={state} />
                                    </div>
                                )
                            })}
                        </div>
                    }
                    <div>
                        {pages.map((pageIndex, i) => (
                            <button
                                key={i}
                                className="pagination-button"
                                onClick={() => setPageNumber(pageIndex)}
                            >
                                {pageIndex + 1}
                            </button>
                        ))}
                        <h3 className="page-number-monitor">
                            Page of {pageNumber + 1}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StateData;