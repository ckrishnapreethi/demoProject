import React, {useState , useEffect} from 'react'

function Sample() {
  const [count, setCount] = useState(0);
//   const time=()=>{
//     setCount(count+1)
//   }
  //  setTimeout(time, 1000);
// time()
// useEffect(()=>{
//   setTimeout(()=>{
//     setCount(count+1)
//     console.log(count)
//   },4000)
// })

  return <h1>rendered {count} times!</h1>;
}

export default Sample