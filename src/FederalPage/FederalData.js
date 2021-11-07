import React, { useRef, useState, useEffect } from "react";
import "./FederalData.css";
import FederalRow from "./FederalRow";
import FederalFilterUI from "./FederalFilterUI";

function FederalData() {
  const [federalData, setFederalData] = useState([]);
  const [show, setShow] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);

  const pages = new Array(numberOfPages).fill(null).map((n, i) => i);

  const federalFilters = ["Recipient Name", "City", "Country", "Award Id", "Start Date", "End Date", "Federal Covid-19 Obligations", "Total Award Amount", "cfda title", "Award Description", "Award Type"]


  const getFederalData = async () => {
    await fetch(
      `http://localhost:9000/federal?pageSize=&page=${pageNumber}`,

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
      .then(({ totalPages, federal }) => {
        console.log(totalPages, federal);
        setFederalData(federal);
        setNumberOfPages(totalPages);
      });
  };

  useEffect(() => {
    getFederalData();

  }, [pageNumber]);




  const filterList = () => {
    federalFilters.map((filter) => {
      <li>{filter}</li>
    })
    return (
      <ul>
        <li>{filterList}</li>
      </ul>
    )
  }


  return (
    <div className="federal-container">
      <div id="federal-header-container">
        <h1 id="federal-header">ADVANCED FEDERAL DATA SEARCH</h1>
      </div>

      <div className="federal-data-container">
        <div className="federal-filter-container">
          <div className="filter-component">
            <div className="filter-header">
              <h5 >FILTERS</h5>
              <hr />
            </div>
            <div>
              {federalFilters.map((filterList) => {
                console.log(filterList);
                return (
                  <div>
                    <FederalFilterUI filter={filterList} />
                  </div>
                )
              })}
            </div>
            <div className="filter-submit-btn">
              <button className="federal-btn" >Submit</button>
            </div>
          </div>

        </div>

        <div id="data-table-container">
          <div>
            <h3 className="spending-name-prime-award">
              SPENDING BY PRIME AWARD
            </h3>
          </div>
          <div id="header">
            <h3 className="table-header">Select</h3>
            <h3 className="table-header">Name</h3>
          </div>
          {
            <div>
              {federalData.map((federalContent, i) => {
                return (
                  <div key={i}>
                    <FederalRow federalContent={federalContent} />
                  </div>
                );
              })}
            </div>
          }
          <div>
            {pages.map((pageIndex) => (
              <button
                className="pagination-button"
                onClick={() => setPageNumber(pageIndex)}
              >
                {pageIndex + 1}
              </button>
            ))}
            <h3 className="page-number-monitor">Page of {pageNumber + 1}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FederalData;
