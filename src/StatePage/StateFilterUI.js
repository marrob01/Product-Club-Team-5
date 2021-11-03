import React, { useState } from 'react'
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';

function StateFilterUI({filter}) {

    const [isClicked, setIsClicked] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [value, setValue] = useState("")
    
    
    
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

    const handleSearch = (e) => {
        setValue(e.target.value)

    }
    
    const handleOnSubmit = (e) => {
        e.preventDefault()
        
    }

    console.log(value);
    const handleClick = () => {
        if(clickRightArrow){
            return clickDownArrow
        } else {
            if(clickDownArrow){
                return clickRightArrow
            }
        }
    }


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
                        <form className="filter">
                            <label>
                            <div onClick={handleClick}>
                            {clickRightArrow}
                            </div>
                                {filter}
                            </label>
                        </form>
                    </div>
                    :
                    <div>
                        <form className="filter" onSubmit={handleOnSubmit}>
                            <div>
                            {filter}
                            <input name="grantee_name" type="text" value={value} onChange={handleSearch}  />
                            </div>
                        </form>
                    </div>
                }
                <button className="filter-submit-btn" ></button>
            </div>
        </div>
    )
}

export default StateFilterUI
