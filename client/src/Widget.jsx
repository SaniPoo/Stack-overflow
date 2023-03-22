import React from "react"
import './RightSidebar.css'
import './pen.png'
import './comment.png'
import './blacklogo.png'

const Widget = () => {
 
    return(
        <div className="widget">
            <h4>The Overflow Blog</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                <img src = {require("./pen.png")} alt="pen" width="18" />
                <p>Observibility is key to the future software (and your devOps career)</p>
                </div>
                <div className="right-sidebar-div-2">
                <img src = {require("./pen.png")} alt="pen" width="18" />
                <p>Podcast 374: How valuable is your screen name</p>
                </div>

            </div>

            <h4>Feature on Meta</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                <img src = {require("./comment.png")} alt="pen" width="18" />
                <p>Review queue workflows: Final Release..</p>
                </div>
                <div className="right-sidebar-div-2">
                <img src = {require("./comment.png")} alt="pen" width="18" />
                <p>Please Welcome Values Associates: #958-V2blast #959-SpencerG</p>
                </div>
                <div className="right-sidebar-div-2">
                <img src = {require("./blacklogo.png")} alt="pen" width="18" />
                <p>Outdated answers: accepted answers are now unpinned on Stack Overflow</p>
                </div>

            </div>

            <h4>Hot Meta Posts</h4>
            <div className="right-sidebar-div-1">
                <div className="right-sidebar-div-2">
                <p>38</p>
                <p>Why was this spam flag declined? Yet the question marked as spam</p>
                </div>
                <div className="right-sidebar-div-2">
                <p>20</p>
                <p>What is the best course of action when the user has high enough rep to</p>
                </div>
                <div className="right-sidebar-div-2">
                <p>14</p>
                <p>Is a link to the "how to ask" help page a useful comment?</p>
                </div>

            </div>
        </div>
        )
    }
export default Widget