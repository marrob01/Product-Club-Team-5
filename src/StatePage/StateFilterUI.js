import React, { useState } from 'react'
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';

function StateFilterUI({ stateList }) {

    const [isActive, setIsActive] = useState(false)
    const [valueInput, setValueInput] = useState("")

    const queryParam = stateList.replace(" ", "_")

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


    const handleSearchInput = (e) => {
        setValueInput(e.target.value)
        console.log(valueInput);
    }


    return (
        <div className="filter-container">
            <div className="filter-item">
                <div className="filter-title" onClick={() => setIsActive(!isActive)}>
                    <div>{!isActive ? clickRightArrow : clickDownArrow}</div>
                </div>
            </div>
            {!isActive ?
                    <label>
                        {stateList}
                    </label>
                :
                    <div>
                        {stateList}
                        <div className="input">
                        <input name={queryParam} type="text" value={valueInput} onChange={handleSearchInput} />
                        </div>
                    </div>
            }
        </div>
    )
}

export default StateFilterUI
