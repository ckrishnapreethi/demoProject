import React, { useState, useEffect } from 'react'

function New() {
    const [name,setName] = useState("preethi")
    const [count , setCount] = useState(0);


    function Inc(){
        setCount(count+1)
    }
    let c;
    useEffect(()=>{
        console.log("didupdate")
         c = setInterval(Inc , 1000)
    

    return()=>{
        console.log("clear");
        clearInterval(c)  
    }
    },[count])
  return (
    <div>
        <p>{name}</p>
        <p>{count}</p>
        <button onClick={()=>{setCount(count+1)}}>count</button>
        <button onClick={()=>{setName("sneha")}}>button</button>
    </div>
  )
}

export default New 