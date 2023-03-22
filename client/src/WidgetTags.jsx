import React from "react"

const tags = ['C', 'CSS', 'express', 'firebase', 'html', 'java', 'javascript', 'mern', 'mongodb',  'mysql', 'next.js', 'Node.js', 'php', 'python', 'react.js']
const WidgetTags = () => {
 
    return(
        <div className="widget-tags">
            <h3>Watched tags</h3>
            <div className="widget-tags-div">
                {
                    tags.map((tag) => (
                        <p key ={tag}>{tag}</p>
                    ))

                    
                }

            </div>

        </div>
        )
    }
export default WidgetTags