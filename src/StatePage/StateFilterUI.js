import React, { useState } from 'react'
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';

function StateFilterUI({ filter }) {

    const [isClicked, setIsClicked] = useState(false)
    const [isActive, setIsActive] = useState(false)
    



    const clickRightArrow = <IoIosArrowForward
        className="filter-right-arrow" size="20px" color="grey"
    />

    const clickDownArrow = <IoIosArrowDown
        className="filter-down-arrown" size="20px" color="grey"
    />

    const clicked = (e) => {
        e.preventDefault()
        setIsClicked(true)

    }

    // const arrow = () => {
    //     if(<label></label>){
    //         return clickRightArrow
    //     }
    // }
    

    return (
        <div className="filter-container">
            <div>
                <h5 className="filter-header">FILTERS</h5>
            </div>
            <div className="filter-item">
                <div className="filter-title" onClick={() => setIsActive(!isActive)}>
                    <div>{!isActive ? clickRightArrow : clickDownArrow}</div>
                </div>
                {!isActive ?
                    <div>
                            <label className="filter">
                                {clickRightArrow}
                                Grant Name
                            </label>

                            <label className="filter">
                            {clickRightArrow}
                                Grant Number
                            </label>
                            <label className="filter">
                            {clickRightArrow}
                                Program Name
                            </label>
                            <label className="filter">
                            {clickRightArrow}
                                City
                            </label>
                            <label className="filter">
                            {clickRightArrow}
                                State
                            </label>
                            <label className="filter">
                            {clickRightArrow}
                                County
                            </label>
                            <label className="filter">
                            {clickRightArrow}
                                Award Fiscal Year
                            </label>
                            <label className="filter">
                            {clickRightArrow}
                                Award Funding
                            </label>
                    </div>
                    :
                    <div>
                        <label className="filter">
                            Grant Name
                            <input name="grantee_name" type="text" onChange={clicked} />
                        </label>

                        <label className="filter">
                        Grant Number
                            <input name="grant_number" type="text" onChange={clicked} />
                    </label>
                    <label className="filter">
                        Program Name
                            <input name="program_name" type="text" onChange={clicked} />
                    </label>
                    <label className="filter">
                        City
                            <input name="city" type="text" onChange={clicked} />
                    </label>
                    <label className="filter">
                        State
                            <input name="state" type="text" onChange={clicked} />
                    </label>
                    <label className="filter">
                        County
                            <input name="county" type="text" onChange={clicked} />
                    </label>
                    <label className="filter">
                        Award Fiscal Year
                            <input name="award_fiscal_year" type="text" onChange={clicked} />
                    </label>
                    <label className="filter">
                        Award Funding
                            <input name="award_funding" type="text" onChange={clicked} />
                    </label> 
                    </div>
                }
            </div>
        </div>
    )
}

export default StateFilterUI
