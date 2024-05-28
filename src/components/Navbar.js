import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from './Blog' 

function Navbar() {
  return (
    <BrowserRouter>
    <div className='Navbar'>
      <div className='navbar-logo'>
      </div>
      <ul className='navbar-menu'>
        <li><a href ="/" >Home</a></li>
        <li><Link to ="/Blog" >Blog</Link></li>
        {/* <li><a href ="/Blog" >Blog</a></li> */}
        <li><Link to ="/Address" >Address</Link></li>

      </ul>
      <Routes>
        <Route exact path = "Blog" element = {<Blog/>}>
        </Route>
      </Routes>

    </div>
    </BrowserRouter>
  )
}

export default Navbar