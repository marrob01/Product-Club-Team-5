import * as React from "react"
import { TopNaVData } from "../TopNavData.js"


const Navigation = () => {

  return(
    <>

      <nav className="navbar">


        <a href = "/" className="menu-bars">
          <h1>Hellooooo</h1>
        </a>


          <ul className="ul-nav">


            {TopNaVData.map((item, index) =>{
              return(
                <li  key={index} >
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
