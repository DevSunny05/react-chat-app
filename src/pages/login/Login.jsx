import React, { useState } from 'react'
import './Login.css'
import { login, signup } from '../../config/firebase'

const Login = () => {
    const [currentState,setCurrentState]=useState("Sign up")

    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const onSubmitHandler=(e)=>{
        e.preventDefault()
        if(currentState==="Sign up"){
            signup(username,email,password)
        }else{
            login(email,password)
        }
        console.log("added")
    }

  return (
    <div className='login'>
        {/* <img src={assets.logo_icon} alt="" className='logo' /> */}
        <form onSubmit={onSubmitHandler} className='login-form' action="">
            <h2>{currentState}</h2>
            {currentState==="Sign up"?<input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" placeholder='username' className='form-input' />:null}
            <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='email' className='form-input' />
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='password' className='form-input' />
            <button type='submit'>{currentState==="Sign up"?"Create account":"Login"}</button>
            <div className='login-term'>
                <input type="checkbox"  />
                <p>Agree to the term of use and privacy policy</p>
            </div>

            <div className='login-forgot'>
                {currentState ==="Sign up"?<p className='login-toggle'>Already have an account? <span onClick={()=>setCurrentState("Login")} >click here</span></p>:
                    <p className='login-toggle'>Create New Account <span onClick={()=>setCurrentState("Sign up")} >click here</span></p>
                }
                
                
            </div>
        </form>

    </div>
  )
}

export default Login