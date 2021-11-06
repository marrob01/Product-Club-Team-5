import React from "react";
import "./StateData.css";
import { useState, useEffect } from "react";
import StateRow from "./StateRow";
import StateFilterUI from "./StateFilterUI";

function StateData() {
  const [stateData, setStateData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);

  const pages = new Array(numberOfPages).fill(null).map((n, i) => i);

  // console.log(filters, stateData);

  const getStateData = async () => {
    await fetch(
      `http://localhost:9000/state?pageSize=&page=${pageNumber}`,

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
      .then(({ totalPages, state }) => {
        console.log(totalPages, state);
        setStateData(state);
        setNumberOfPages(totalPages);
      });
  };

  useEffect(() => {
    getStateData();
  }, [pageNumber]);

  return (
    <div className="state-content-container">
      <div className="state-header-container">
        <h1 className="state-header">ADVANCE STATE DATA SEARCH</h1>
      </div>
      <div className="state-filter-container">
        <div className="filter-component">
          <div>
            <StateFilterUI />
          </div>
        </div>
        <div className="state-data-container">
          <div className="state-data-table-container">
            <div id="state-header">
              <h3 className="select">Select</h3>
              <h3 className="name">Name</h3>
            </div>

            <div className="state-data">
              <div>
                {stateData.map((state, i) => {
                  // console.log(state);
                  return (
                    <div key={i}>
                      <StateRow state={state} />
                    </div>
                  );
                })}
              </div>

              <div>
                {pages.map((pageIndex) => (
                  <button
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
      </div>
    </div>
  );
}

export default StateData;
