import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import icon from './icon.png'
import './Auth.css'
import AboutAuth from './AboutAuth'
import { signup, login } from './actions/auth'

const  Auth = () => {

    const [IsSignup, setIsSignup] = useState(false)
    const [name, setName] = useState ('')
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSwitch = () => {
        setIsSignup(!IsSignup)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email && !password) {
            alert ("Enter email and password")
        }
        if(IsSignup){
            if(!name){
                alert ("Enter a name to continue")
            }
            dispatch (signup ({name, email, password}, navigate))
        }else {
            dispatch (login ({email, password}, navigate))
        }
        
    }
    return(
    <section className='auth-section'>
        {
            IsSignup && <AboutAuth />
        }
        <div className='auth-container-2'>
            {!IsSignup && <img src={icon} alt= "stack overflow" className='login-icon' style={{maxWidth:"50px", padding: "20px 30px"}}></img>}
        
        <form onSubmit = {handleSubmit}>

            {
                IsSignup && (
                    <label htmlfor = "name">
                        <h4>Display Name</h4>
                        <input type= "text" name = "name" id = "name" onChange={(e) => {setName(e.target.value)}}/>
                    </label>
                )
            }
            <label htmlFor='email'>
            <h4>Email</h4>
            <input type="email" name='name'id='email' onChange={(e) => {setEmail(e.target.value)}}/>
            </label>
            <label htmlFor='password'>
                <div style= {{display: "flex", justifyContent: "space-between"}}><h4>Password</h4>
                    {!IsSignup && <p style = {{color: '#007ac6', fontSize: "13px"}}>Forgot Password?</p>}
                </div>
            <input type="password" name='name'id='password' onChange={(e) => {setPassword(e.target.value)}}/>
            {IsSignup && <p style = {{color: "#666767", fontSize: "13px"}}>Password should contain eight <br />characters, and at least 1 letter <br />and 1 number</p>}
            </label>
            {
                IsSignup && (
                    <label htmlFor='check'>
                        <input type="checkbox" name = "checkbox" id='check' />
                        <p style = {{ fontSize: "13px"}}>
                        Opt-in to receive occasional <br />product updates, user research invitations,<br /> company announcements, and digests.
                        </p>

                    </label>
                )
            }
            <button type='Submit' className='auth-btn'>{ IsSignup ? 'Sign up': 'Log In'}</button>
            {
                IsSignup && (
                <p style = {{color: "#666767", fontSize: "13px"}}>
                    
                    By clicking “Sign up”, you agree to our<br />
                    <span style = {{color: '#007ac6'}}> terms of service </span>, 
                    <span style = {{color: '#007ac6'}}> privacy policy</span> and 
                    <span style = {{color: '#007ac6'}}> cookie policy</span>
                    </p>
                )
            }
        </form>
        <p>
            {IsSignup ? 'Already have an account' : "Don't have an account?"}
            <button type="button" className='handle-switch-btn' onClick={handleSwitch}>{IsSignup ? 'Log In' : 'Sign up'}</button>
        </p>
        </div>

    </section>
    )
    }
export default Auth