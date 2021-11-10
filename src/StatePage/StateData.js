
import React from 'react';
import './StateData.css'
import { useState, useEffect } from 'react';
import StateRow from './StateRow';
import StateFilterUI from './StateFilterUI';


function StateData() {

    const [stateData, setStateData] = useState([])
    const [pageNumber, setPageNumber] = useState(0);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [upperBoundary, setUpperBoundary] = useState(0);
    const [lowerBoundary, setLowerBoundary] = useState(0);

    const filters = ["Grantee Name", "Grant Number", "Program Name", "City", "County", "State", "Award Fiscal Year", "Award funding"]

    const pages = new Array(numberOfPages).fill(null).map((n, i) => i);


    const getStateData = async () => {
        await fetch(`http://localhost:9000/state?pageSize=&page=${pageNumber}`


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
            .then(({ totalPages, state }) => {
                console.log(totalPages, state);
                setStateData(state);
                setNumberOfPages(totalPages);
            });
    }


    const getOuterBounds = () => {


      if(pageNumber < 5) {
        setUpperBoundary(10)
        setLowerBoundary(0)
      } else if (numberOfPages - 5 < pageNumber) {
        setUpperBoundary(numberOfPages)
        setLowerBoundary(numberOfPages - 10)
      } else {
        setUpperBoundary(pageNumber + 6)
        setLowerBoundary(pageNumber - 4)
      }

      // prevent previous from working when Im at page one
      // prevent next from working when at the total amount of pages
}  


    useEffect(() => {
        getStateData();
        getOuterBounds();
    }, [pageNumber])



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
                        <div>
                            {filters.map((filterList) => {
                                console.log(filterList);
                                return (
                                    <div>
                                        <StateFilterUI filter={filterList} />
                                    </div>
                                )
                            })}
                        </div>
                        <div className="filter-submit-btn">
                            <button className="state-btn">Submit</button>
                        </div>
                    </div>
                </div>
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
                    <div className="paging-number-field">
                    <button  className="previous-next-button" onClick={() => setPageNumber(pageNumber - 1)}>Previous</button>
                        {pages.slice(lowerBoundary, upperBoundary).map((pageIndex) => (
                            <button
                                className="pagination-button"
                                onClick={() => setPageNumber(pageIndex)}
                            >
                                {pageIndex + 1}
                            </button>
                        ))}
                        <button  className="previous-next-button" onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
                        <h4 className="page-number-monitor">
                            Page of {pageNumber + 1}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StateData;