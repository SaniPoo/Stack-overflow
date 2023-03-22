import React from "react"
import './LeftSidebar.css'
import {NavLink} from 'react-router-dom'
import './globe.png'

const LeftSidebar = () => {
 
    return(
        <div className="left-sidebar">
            <nav className="side-nav">
                <NavLink to='/' className="side-bar-links" activeclassname = "active">
                    <p>Home</p>
                </NavLink>
                <div className="side-nav-div">
                    <div><p>PUBLIC</p></div>
                    
                    <NavLink to ='/Questions' className="side-bar-links" >
                        <img src = {require("./globe.png")} alt="Globe" />
                        <p style = {{paddingLeft:"10px"}}>Questions</p>
                    </NavLink>
                    <NavLink to = '/Tags' className="side-bar-links" activeclassname = "active" style = {{paddingLeft: "40px"}}>
                    <p>Tags</p>
                    </NavLink>
                    <NavLink to = '/Users' className="side-bar-links" activeclassname = "active" style = {{paddingLeft: "40px"}}>
                    <p>Users</p>
                    </NavLink>

                </div>

            </nav>

        </div>
        )
    }
export default LeftSidebar