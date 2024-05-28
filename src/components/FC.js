import React, {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route,link } from 'react-router-dom';

function FC() {
    const[data, setData] = useState(new Date().toString());
    const[display, setDisplay] = useState(true)
    function show(){
        setData(new Date().toString())
    }
    useEffect(()=>{
        setData(new Date().toString())
          // setInterval(show )
          
          console.log("didmount" )
        
         
    },[data])
  return (
     <div>{data}
        <button onClick={show}>Display Time </button>
    </div>
  )
}

export default FC