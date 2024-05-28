import { useEffect, useState } from 'react';
import React from 'react' ;
import './App.css';
// import Routers from './router';
import Greet from './components/greet.js' ;
import Objecthook from './components/objecthook.js';
import Arrayhook from './components/arrayhook.js';
import Practice from './components/practice.js';
import Sample from './components/sample.js'
import FC from './components/FC.js';
import Project from './components/project';
import New from './components/new.js';
import Navbar from './components/Navbar.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/Login.js' ;
import Signup from './components/Signup.js';
import API from './API.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import USH from './Learning/USH.js';
import Dropdown from './components/Dropdown.js';
import Dropdown_JSON from './components/Dropdown_JSON.js';
// import dummy from './components/dummy.json'
import Dropdown3 from './components/Dropdown3.js';
import DemoAPI from './components/demoAPI.js';
import Selection from './components/Selection.js';


function App() {
  // const[name,setName]=useState('preethi')
  // // useEffect(()=>{
  // //   console.log(name)
  // //   setName(name)
  // // },[name])
  // const[flag, setFlag]=useState(false)

  // function a(){
  //   if(name == "preethi")
  //     setName("Bhanu");
  //   }else {
  //     setName("Preethi");
  //   }
 
  return (

    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path ="/" element="login"></Route>
          <Route path ="/Signup" element="Signup"></Route>
        </Routes>
      </BrowserRouter> */}
      {/* <p>{name}</p>
      <button >clickme</button>
      <p>{ flag ? <FC /> : " " } </p>
      <button onClick={()=>setFlag(!flag)}>toogle it </button> */}
       {/* <Greet name = 'Everyone'> 
        <p> Have a good day </p>*/}
       {/* <Greet />  */}
       {/* <Objecthook />   */}
       {/* <arrayhook/> */}
        {/* <New /> */}
       {/* <Practice /> */}
       {/* <Practice /> */}
       {/* <Sample /> */}
       
      {/* <button onClick={()=>setName('Bhanusree')}>Router</button> 
       <Routers/> */}
      {/* <Project/> */}
      {/* <Navbar/> */}
      {/* <Login/> */}
      {/* <Dashboard/> */}
      {/* <API/> */}
      {/* <USH/> */}
      {/* <Dropdown/> */}
      {/* <Dropdown_JSON/> */}
      {/* <Dropdown3/> */}
      {/* <DemoAPI /> */}
      <Selection/>

      
    </div>
  );
  }

  
export default App;

