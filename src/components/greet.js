import React, { useState } from 'react' ;  

// function Greet(){
//     return <h1>Welcome to all </h1>
// const Greet = (props)=> {
//     return <h1>Welcome to {props.name} </h1>

// }
const Greet = (props)=> {
    // const[names,setNames] = useState(props.name)
    // const handleClick=()=>{
    //     setNames('Preethi')
    // }
    const initial_value = 0
    const[count, setCount] = useState(initial_value)

    const increment= () =>{
        for(let i=0 ; i<5 ; i++){
            setCount(count => count+1);
        }
    }

    return (
        <div>
            {/* <h1>Welcome to {names} </h1> */}
            {/* {props.children}
            <button onClick={() => setNames('preethi')}>click me</button> */}
            count : {count}
            <button onClick={() => setCount(initial_value)}>Reset</button>
            <button onClick={() => setCount(count+1)}>increment</button>
            <button onClick={() => setCount(count-1)}>decrement</button>
            <button onClick={increment}>incrementFive</button>
        </div>  
    );    
}

export default Greet ;
