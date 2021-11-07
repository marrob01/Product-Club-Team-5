import * as React from "react"
import { TopNaVData } from "./TopNavData.js"
import '../style/Nav.css'
import Image from "./covidSpending.png"

const logo = <img classname="logo" src={Image} alt="Covid-19" style={{ width: "200px", height:"200px" }} />

const Navigation = () => {

  return (
    <div className="nav-container">
      <nav className="navbar">
        <a href="/" className="menu-bars">
          {logo}
        </a>
        <ul className="ul-nav">
          {TopNaVData.map((item, index) => {
            console.log(index);
            return (
              <a className="a-nav" href={item.path} >
                <li key={index} className="nav-text">
                  {item.title}
                </li>
              </a>
            )
          })}

        </ul>
      </nav>
    </div>
  )


}
export default Navigation
