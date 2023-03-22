import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Auth from './Auth'
import Questions from './Questions'
import AskQuestion from './AskQuestion'
import DisplayQuestions from './DisplayQuestions'
import Question from './Question'
import Tags from './Tags'
import Users from './Users'
import UserProfile from './UserProfile'


const  AllRoutes= () => {
    return (
    <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/Auth' element= {<Auth />} />
        <Route path='/Questions' element= {<Questions />} />
        <Route path='/AskQuestion' element= {<AskQuestion />} />
        <Route path='/Question/:id' element= {<DisplayQuestions />} />
        <Route path = '/Tags' element = {<Tags />} />
        <Route path = '/Users' element = {<Users />} />
        <Route path = '/Users/:id' element = {<UserProfile />} />
    </Routes>
    )
    }
export default AllRoutes
