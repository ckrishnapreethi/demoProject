import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const result = await response.json();
        console.log(result);
        if (result?.users) {
          setUser(result.users);
        } else {
          setUser([]);
        }
      } catch (error) {
        console.log("error occured", error);
      }
    };
    fetchAPI();
  }, []);
  return (
    <div>
      <h1>Userlist details </h1>
      <ul>
        {user && user.length > 0 ? (
          user.map((item) => (
            <li key={item.id}>
              <p>
                {item.firstName} {item.lastName}
              </p>
            </li>
          ))
        ) : (
          <h1>No user found</h1>
        )}
      </ul>
      {/* <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>  */}
    </div>
  );
}


// import { useEffect, useState } from "react";
// import "./styles.css";

// export default function App() {
//   const [user, setUser] = useState([]);
//   // useEffect(() => {
//   const fetchAPI = async () => {
//     try {
//       const response = await fetch("https://dummyjson.com/users");
//       const result = await response.json();
//       console.log(result);
//       if (result?.users) {
//         setUser(result.users);
//       } else {
//         setUser([]);
//       }
//       //  const  data = result.user
//     } catch (error) {
//       console.log("error occured", error);
//     }
//   };
//   // fetchAPI();
//   // }, []);

//   function handleButtonClick() {
//     fetchAPI();
//   }
//   return (
//     <div>
//       <h1>Userlist details </h1>
//       <button onClick={handleButtonClick}>fetch list of users </button>
//       <ul>
//         {user && user.length > 0 ? (
//           user.map((item) => (
//             <li key={item.id}>
//               <p>
//                 {item.firstName} {item.lastName}
//               </p>
//             </li>
//           ))
//         ) : (
//           <h1>No user found</h1>
//         )}
//       </ul>
//       {/* <div className="App">
//         <h1>Hello CodeSandbox</h1>
//         <h2>Start editing to see some magic happen!</h2>  */}
//     </div>
//   );
// }

 