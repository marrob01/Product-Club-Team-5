import * as React from "react"
import { TopNaVData } from "./TopNavData.js"
import '../style/Nav.css'
import navImage from '../images/usa-logo.png'



const Navigation = () => {

  return(
    <>

      <nav className="navbar">


        <a href = "/" className="menu-bars">
          <img className='nav-image' src={navImage} alt="USA Logo" />
        </a>
       

          <ul className="ul-nav">


            {TopNaVData.map((item, index) =>{
              return(
                <li  key={index} className={item.cName}>
                <a href = {item.path} >
                  {/* {item.icon} */}
                  <span>{item.title}</span>
                </a>
              </li>

              )
            })}

          </ul>
      </nav>

    </>
  )


}
export default Navigation
