import {React, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import decode from 'jwt-decode'

import stacklogo from './stacklogo2.png'
import searchlogo from './searchlogo.jpg'
import Avatar from './Avatar'
import './Navbar.css'
import { setCurrentUser } from './actions/currentUser'

const Navbar = () => {
const dispatch = useDispatch()
const User = useSelector((state) => (state.currentUserReducer))
const navigate = useNavigate()

        const handleLogout = () => {
            dispatch({type: 'LOGOUT'})
            navigate('/')
            dispatch(setCurrentUser(null))
        }

        useEffect (() =>{
            const token = User?.token
            if(token){
                const decodedToken = decode(token)
                if(decodedToken.exp * 1000 < new Date().getTime()) {
                    handleLogout()
                }
            }
           dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        }, [dispatch])


    return(
        <nav className='main-nav'>
            <div className ='navbar'>
            <Link to='/' className='nav-item nav-logo'>
                <img src = {stacklogo} alt = "logo" width = "150"/>
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Product</Link>
            <Link to='/' className='nav-item nav-btn'>For teams</Link>
            <form>
                <input type= "text" placeholder = "search..."/>
                <img src = {searchlogo} alt="search" width = "20" className='search-icon'/>
            </form>
            {User === null ?
            <Link to='/Auth'className='nav-item nav-Links'>Log In</Link>:
            <>
            <Avatar backgroundColor='#009dff' px= '13px' py= '5px' borderRadius= '50%' color= 'white' align ='center'><Link to= {`/Users/${User?.result?._id}`} style={{color:'white', textDecoration: 'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
            <button className='nav-item nav-Links'onClick={handleLogout}>Log out</button>
            </>
        }
            
                
            </div>

        </nav>
    )
}
export default Navbar