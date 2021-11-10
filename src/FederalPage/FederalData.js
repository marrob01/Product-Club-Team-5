import React, { useRef, useState, useEffect } from "react";
import "./FederalData.css";
import FederalRow from "./FederalRow";
import FederalFilterUI from "./FederalFilterUI";

function FederalData({ filterList }) {
  const [federalData, setFederalData] = useState([]);
  // const [show, setShow] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [valueInput, setValueInput] = useState("")
  const [upperBoundary, setUpperBoundary] = useState(0);
  const [lowerBoundary, setLowerBoundary] =  useState(0);


  const pages = new Array(numberOfPages).fill(null).map((n, i) => i);

  const federalFilters = ["Recipient Name", "City", "Country", "Award Id", "Start Date", "End Date", "Total Award Amount", "cfda title", "Award Description", "Award Type"]

  


  const getFederalData = async (urlParams) => {
    await fetch(
      `http://localhost:9000/federal?pageSize=&page=${pageNumber}${urlParams}`,

      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(({ totalPages, federal }) => {
        setFederalData(federal);
        setNumberOfPages(totalPages);
      });
  };

  const handleSearchInput = (e) => {
    setValueInput(e.target.value)
    console.log(valueInput);
  }

  // resets page number boundaries
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
    getFederalData();

    getOuterBounds();

  }, [pageNumber]);


 



  useEffect(() => {
    getFederalData("");
  }, []);

  
  const getResultData = (e) => {
    let urlParams = ""
    Object.keys(e.target).forEach(input => {
      const name = e.target[input].name
      const value = e.target[input].value
      if(name && value){
        const param = `${name}=${value.toUpperCase()}`
        urlParams += `&${param}`
      }

    })
    getFederalData(urlParams)
    e.preventDefault()
  }

  return (
    <div className="federal-container">
      <div className="federal-content-flex">
        <div id="federal-header-container">
          <h1 id="federal-header">ADVANCED FEDERAL DATA SEARCH</h1>
        </div>
        <div>
          <h3 className="spending-name-prime-award">
            SPENDING BY PRIME AWARD
          </h3>
        </div>
      </div>
      <div className="federal-data-container">
        <div className="federal-filter-container">
          <div className="filter-component">
            <div className="filter-header">
              <h5 >FILTERS</h5>
              <hr />
            </div>
            <form className="filter" onSubmit={getResultData}>
              {federalFilters.map((filterList, i) => {
                return (
                  <div key={i}>
                    <FederalFilterUI filterList={filterList} federalContent={federalData} valueInput={valueInput} onChange={handleSearchInput}/>
                  </div>
                )
              })}
              <div className="filter-submit-btn">
                <button className="federal-btn" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div id="data-table-container">
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
            <h4 className="page-number-monitor">Page of {pageNumber + 1}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FederalData;
