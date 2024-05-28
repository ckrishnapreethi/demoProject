import React, { useState } from 'react'

function USH() {
    const [name,setName] = useState("preethi")
    const [flag,setFlag] = useState(true)
    const [steps,setSteps]=useState(0)
    const [names, setNames]= useState([])
    
    function update(){
        setName("cuitee")
        setFlag(!flag)
    }
   function sub(e) {
      e.preventDefault();
      setNames([...names, {id : names.length, name}])
      setName("")
   }
  return (
    <div>USH
        
        <div>
        {flag ? name :" "}
        </div>
        <button onClick={update}>Click me </button>
        <div>
            {steps}
            {/* <button onClick={()=>{setSteps(steps+1)}}>Add count</button> */}
            <button onClick={()=>{setSteps(prevState=>prevState+90)}}>ADD on </button>
      </div>
      <form onSubmit={sub()}>
        <input type = "text" place holder ="enter names" value = {name} onChange={(e)=>{setName(e.target.value)}}>Names</input>
        <button>click</button>
      </form>

      <div>
       { names.map((item) => (
          <li key={item.id}>{item.value}</li>
         ))}
      </div>
    </div>
  )
}

export default USH