import React, { useState, useEffect } from 'react'
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';

function FederalFilterUI({ filter }) {

    const [isClicked, setIsClicked] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [value, setValue] = useState("")


    const handleClick = () => {
        if (clickRightArrow) {
            return clickDownArrow
        } else {
            if (clickDownArrow) {
                return clickRightArrow
            }
        }
    }

    const clickRightArrow = <IoIosArrowForward
        className="filter-right-arrow" size="20px" color="grey" onClick={handleClick}
    />

    const clickDownArrow = <IoIosArrowDown
        className="filter-down-arrown" size="20px" color="grey" onClick={handleClick}
    />

    const clicked = (e) => {
        e.preventDefault()
        setIsClicked(true)
    }

    const handleSearch = (e) => {
        setValue(e.target.value)

    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(value);
    }

    console.log(value);



    const Filter = ({newFilter}) => {

        const [filteredDataList, setFilteredDataList] = useState(null)
        // const [filter, setFilter] = useState(null)
    
    
        // Award_Id: String,
        //     Start_Date: Date,
        //     End_Date: Date,
        //     Recepient_Name: String,
        //     Country: String,
        //     City: String,
        //     Federal_Covid_19_Obligation: Number,
        //     Total_Award_Amount: Number,
        //     cfda_title: String,
        //     award_description: String,
        //     Award_Type: String
    
        const handleFilterSearch = () => {
            let filteredData = newFilter;
            if (!newFilter) setFilteredDataList()
            else {
                if (newFilter.Start_Date) filteredData = filteredData.filter(award => award.Start_Date === newFilter.Start_Date)
                if (newFilter.End_Date) filteredData = filteredData.filter(award => award.End_Date === newFilter.End_Date)
                if (newFilter.Recepient_Name) filteredData = filteredData.filter(award => award.Recepient_Name === newFilter.Recepient_Name)
                if (newFilter.City) filteredData = filteredData.filter(award => award.City === newFilter.City)
                if (newFilter.Total_Award_Amount) filteredData = filteredData.filter(award => award.recipient_name === newFilter.recipient_name)
                if (newFilter.Award_description) filteredData = filteredData.filter(award => award.Award_description === newFilter.Award_description)
                if (newFilter.cfda_title) filteredData = filteredData.filter(award => award.cfda_title === newFilter.cfda_title)
                setFilteredDataList(filteredData) 
            }
        }
        
        
        if (filteredDataList) console.log(filteredDataList)
    }


    return (
        <div className="filter-container">
            <div className="filter-item">
                <div className="filter-title" onClick={() => setIsActive(!isActive)}>
                    <div>{!isActive ? clickRightArrow : clickDownArrow}</div>
                </div>
            </div>
            {!isActive ?
                <form className="filter">
                    <label>
                        {filter}
                    </label>
                </form>
                :
                <form className="filter" onSubmit={handleOnSubmit}>
                    <div>
                        {filter}
                        <div classname="input">
                            <input name="recepient_name" type="text" value={value} onChange={handleSearch} />
                        </div>
                    </div>
                </form>
            }
        </div>
    )
}

export default FederalFilterUI
