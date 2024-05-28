import React, {useState} from 'react';

function Practice() { 
   
    const[name , setName] = useState("preethi");
    const[names , setNames] = useState([]);
    // const[sub, setSub] = useState([]);
    const form = (e) => {
        e.preventDefault()
        setNames([...names({id : names.length, name })])

            // setSub({
            //     index : name.length, value : {element} )}
           
    }
    
    

  return (
    <div>
        {/* <h1>{Name}</h1> */}
        <form onSubmit={(e)=>form(e)}>
        <input type="text" value = {name} placeholder = "enter name" onChange = {(e) =>setName(e.target.value)}></input>
        <button>submit</button>  
        </form>      
        <ul>
            
             {names.map((item) =>
               <li key= {item.id}>{item.name}</li>  
        //        {name.map(items =>(
        //     <li key = {items.id} >{items.value}</li>
        //   ))} 
        )}
            
        </ul>
        
        

    </div>
  )
        }

export default Practice;








