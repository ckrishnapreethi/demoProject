import React,{useState} from 'react'

function Arrayhook() {
    const [items , setItems] = useState([])

    const handle = ()=> {
      setItems([...items,{
        id : items.length,
        value :Math.floor(Math.random()*10) +1
    }])
  }
  return (
    <div>arrayhook
        <button onclick = {handle}>Add</button>
        <ul>
          {items.map((item) =>(
            <li key = {items.id} >{items.value}</li>
          ))} 
        </ul>
        
    </div>

  )
}

export default Arrayhook