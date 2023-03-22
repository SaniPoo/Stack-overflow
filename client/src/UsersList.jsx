import React from "react";
import { useSelector } from "react-redux";
import User from './User'
import './Users.css'

const UsersList = () => {
    const user = useSelector((state) => state.usersReducer)
   

return (
<div className="overall-container">
    <div className="user-list-container">
       {
        user.map((user) => (
            <User user = {user} key = {user?._id} />
        ))
       }
    </div>
</div>
)
}

export default UsersList