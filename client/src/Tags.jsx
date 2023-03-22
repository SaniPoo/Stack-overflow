import React from "react";
import LeftSidebar from "./LeftSidebar";
import TagsList from "./TagsList";
import './Tags.css'

const Tags = () => {

    const tagsList = [{
        id: 1,
        tagName: "javascript",
        tagDesc: "For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript). Keep in mind that JavaScript is NOT the same as Java! Include all labels that are relevant to your question"
       
     },{ id: 2, 
        tagName: "python",
        tagDesc: "Python is a multi-paradigm, dynamically typed, multi-purpose programming language. It is designed to be quick to learn, understand, and use, and enforces a clean and uniform syntax."
    }, {
        id: 3,
        tagName: "C#",
        tagDesc: "C# (pronounced see sharp) is a high-level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets Microsoft's .NET family of tools and run-times."
    }, {
        id: 4,
        tagName: "java",
        tagDesc: "Java is a high-level object-oriented programming language. Use this tag when you're having problems using or understanding the language itself."
    }, {
        id: 5,
        tagName: "php",
        tagDesc: "PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language designed initially for server-side web development."
    }, {
        id: 6,
        tagName: "html",
        tagDesc: "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a web browser."
    }, {
        id: 7,
        tagName: "android",
        tagDesc: "Android is Google's mobile operating system, used for programming or developing digital devices (Smartphones, Tablets, Automobiles, TVs, Wear, Glass, IoT)."
    }, {
        id: 8,
        tagName: "css",
        tagDesc: "CSS (Cascading Style Sheets) is a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup Language), XML (Extensible Markup Language) documents and SVG elements."
    }, {
        id: 9,
        tagName: "reactjs",
        tagDesc: "React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be efficient and flexible"
    }, {
        id: 10,
        tagName: "node.js",
        tagDesc: "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library."
    }]

return (

    <div className="home-container-1">
        <LeftSidebar />
    <div className="home-container-2">
        <h1 className="tags-h1">Tags</h1>
        <p className="tags-p">A tag is a key or a lable that categorizes your question with other or similar question</p>
        <p className="tags-p">Using tags makes it easy for others to find and answer your question</p>
        <div className="tags-list-container">
            {
                tagsList.map((tag) => (
                    <TagsList tag = {tag} key = {tagsList.id} />
                ))
            }

        </div>
    </div>
       
    </div>
)
}

export default Tags