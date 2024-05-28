import React, { useState, useEffect } from 'react';

function DemoAPI() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            console.log(response)
            // if (!response.ok) {
            //   throw new Error('Network response was not ok');
            // }
            const jsonData = await response.json();
            console.log(jsonData) 
            setData(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
  return (
    <div>
        <table>
            <tr>
                <th>UserID</th>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            {data ? (
            data.map((item) => (
                <tr>
            <td key={item.id}>{item.userId}  </td>
            <td key={item.id}>{item.id}  </td>
            <td key={item.id}>{item.title}  </td>
            <td key={item.id}>{item.body}  </td>
            </tr>
          ))
        ) : (
            <p>Loading...</p>
          )}
        </table>
        {/* {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )} */}
      </div>
  )
}

export default DemoAPI