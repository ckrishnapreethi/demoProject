import React from 'react' ;
import {useState, useEffect} from 'react'
import Greet from './components/greet';

function API(){
    
  const [userdata, setUserdata] = useState({
    username :" " ,
    password: " "  
});
//   const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', userdata.username);
        console.log('Password:', userdata.password);
        // You can perform further actions like sending data to a server here
      };
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUserdata((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

 
  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={userdata.username}
            onChange={handleChange}
            // {(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={userdata.password}
            onChange= {handleChange}
            // {(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Signup</button>
      </form>
    
        {/* <button onClick={()=>{setData("preethi")}}>click</button> */}
            {/* <button onClick={()=>{setData("sneha")}}>button</button>   */}
            {/* <div> <Greet/></div> */}
        
        </div>
    )
}
export default API 
