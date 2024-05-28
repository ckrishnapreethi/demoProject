import React, { useState } from 'react'

function Objecthook() {
    const [names , setNames]=useState({firstName : "" , lastName : ""})


  return (
    <div>Objecthook
        <input type='text' value = {names.firstName} onChange={e => setNames({firstName : e.target.value})}></input>
        <input type = 'text' value = {names.lastName} onChange ={e=> setNames({lastName : e.target.value})}></input>
        <h1>firstName : {names.firstName}</h1>  
        <h1>lastName : {names.lastName}</h1>
        <h1>{JSON.stringify(names)}</h1>
    </div> 
  )
}

export default Objecthook