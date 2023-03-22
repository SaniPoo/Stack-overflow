import { combineReducers } from "redux";
import authReducers from "./auth.js";
import currentUserReducer from "./currentUser.js";
import questionsReducer from './Questions.js';
import usersReducer from "./users.js";

export default combineReducers ({
    authReducers, currentUserReducer, questionsReducer, usersReducer
})