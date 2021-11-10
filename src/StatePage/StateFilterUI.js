import React, { useState } from 'react'
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';

function StateFilterUI({ filter }) {

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
                            <input name="grantee_name" type="text" value={value} onChange={handleSearch} />
                        </div>
                    </div>
                </form>
            }
        </div>
    )
}

export default StateFilterUI
