import React from "react"
import LeftSidebar from "./LeftSidebar"
import RightSidebar from "./RightSidebar"
import QuestionDetails from "./QuestionDetails"
import './LeftSidebar.css'
import './RightSidebar.css'
import './App.css'


const DisplayQuestions = () => {
 
    return(
    <>
    <div className='home-container-1'>
        <LeftSidebar />
        <div className="home-container-2">
            <QuestionDetails />
            <RightSidebar />
        </div>
    </div> 
    </>
        )
    }
export default DisplayQuestions


