import React from 'react'
import './style.css'
// import Signup from './Signup'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Login() {
    const [formdata ,setFormdata] = useState({
        firstname :" ",
        lastname :" " ,
        email:" " ,
        password :" "
    })
    
    const submit = async (e)=> { 
    e.preventDefault();
    // console.log(`firstname: ${formdata.firstname} lastname: ${formdata.lastname} email: ${formdata.email}  password: ${formdata.password}`)
    try {
        await axios.post('http://localhost:3001/users', {user:formdata})
    }
    catch(error){
        console.error('Error updating user:', error);

    }
        
    }

let change = (e)=>{
    const {name, value} = e.target ;
    setFormdata((prevData)=>({
        ...prevData, 
        [name]: value ,
    }));
};
  return (
    <div className='login d-flex justify-content-center align-item-center'>
        <div className='login-container'>
            <form onSubmit = {submit} >
                <h1>Signup</h1>
                <div className='mb-2'>
                    <label>FirstName</label>
                    <input type="text"
                     name = "firstname"
                     value = {formdata.firstname}
                     onChange = {change}
                     placeholder='Enter first name' className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label>LastName</label>
                    <input type="text" 
                     name = "lastname"
                     value = {formdata.lastname}
                     onChange = {change}
                    placeholder='Enter Last name' className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label>Email</label>
                    <input type="Email"
                     name = "email"
                     value = {formdata.email}
                     onChange = {change}
                     placeholder='Enter Email' className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label>Password</label>
                    <input type="Password" 
                     name ="password"
                     value = {formdata.password}
                     onChange = {change}
                    placeholder='Enter Password' className='form-control'/>
                </div>
                <div className='mb-2'>
                    <input type="Checkbox" className='custom-control custom-checkbox' id='check'/>
                    <label htmlFor="check" className='custom-input-label ms-2' >Remember check</label>
                </div>
                <div className="d-grid gap-2 ">
                    <button className="btn btn-secondary " type="submit">Button</button>
                </div>
                <div className='d-flex justify-content-between align-item-center' >
                    {/* <p>forgot <a href ="/password">Password?</a></p>
                <a href ="/Signup">signup</a> */}
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default Login
