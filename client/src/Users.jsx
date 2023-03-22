import React from "react";
import { useLocation } from "react-router-dom";

import './Users.css'
import LeftSidebar from "./LeftSidebar";
import UsersList from "./UsersList";

const Users = () => {
    const location = useLocation()

return (

    <div className="home-container-1">
        <LeftSidebar />
        <div className="home-container-2" style = {{marginTop:"40px"}}>
            <h1 className="title">Users</h1>
            <UsersList />:
                
        </div>      
    </div>
)
}

export default Users