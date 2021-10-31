import React, { useState } from 'react'
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';

function StateFilterUI() {

    const [isClicked, setIsClicked] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [expandNameContainer, setExpandNameContainer] = useState(false);
    const [name, setName] = useState("")

    const clicked = (e) => {
        e.preventDefault()
        const box = e.target
        const name = box.name
        const value = box.type === "checkbox"
        if (isClicked) {
            setIsClicked(true)
        }
    }

    const checked = (e) => {
        e.preventDefault()
        const box = e.target
        const name = box.name
        const value = box.type === "checkbox"
        setName(name = value)
    }

    const clickRightArrow = <IoIosArrowForward
        className="right-arrow" size="30px" color="grey"
        onClick={() => setExpandNameContainer(!expandNameContainer)}
    />

    const clickDownArrow = <IoIosArrowDown
        className="down-arrown" size="30px" color="grey"
        onClick={() => setExpandNameContainer(!expandNameContainer)}
    />

    return (
        <div className="filter-item">
            <div className="filter-title" onClick={() => setIsActive(!isActive)}>
                <div>{!isActive ? clickRightArrow : clickDownArrow}</div>
                <div>
                    <form>
                        <h5 className="filter-header">FILTERS</h5>
                        <label className="filter">
                            Grantee Name
                        </label>
                        <label className="filter">
                            Grant Number
                        </label>
                        <label className="filter">
                            Program Name
                        </label>
                        <label className="filter">
                            City
                        </label>
                        <label className="filter">
                            State
                        </label>
                        <label className="filter">
                            County
                        </label>
                        <label className="filter">
                            Award Fiscal Year
                        </label>
                        <label className="filter">
                            Award Funding
                        </label>
                    </form>
                </div>
            </div>
            {isActive &&
                <div className="filter-accordion-content">
                    {<form>
                        <h5 className="filter-header">FILTERS</h5>
                        <label className="filter">
                            Grantee Name
                            <input name="grantee_name" type="checkbox" checked={checked} onChange={clicked} />
                        </label>
                        <br />
                        <label className="filter">
                            Grant Number
                            <input name="grantee_name" type="checkbox" checked={checked} onChange={clicked} />
                        </label>
                        <label className="filter">
                            Program Name
                            <input name="grantee_name" type="checkbox" checked={checked} onChange={clicked} />
                        </label>
                        <label className="filter">
                            City
                            <input name="grantee_name" type="checkbox" checked={checked} onChange={clicked} />
                        </label>
                        <label className="filter">
                            State
                            <input name="grantee_name" type="checkbox" checked={checked} onChange={clicked} />
                        </label>
                        <label className="filter">
                            County
                            <input name="grantee_name" type="checkbox" checked={checked} onChange={clicked} />
                        </label>
                        <label className="filter">
                            Award Fiscal Year
                            <input name="grantee_name" type="checkbox" checked={checked} onChange={clicked} />
                        </label>
                        <label className="filter">
                            Award Funding
                            <input name="grantee_name" type="checkbox" checked={checked} onChange={clicked} />
                        </label>
                    </form>
                    }
                </div>
            }
        </div>
    )
}

export default StateFilterUI
