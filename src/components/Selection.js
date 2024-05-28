import React, { useEffect, useState } from 'react';

function Selection() {
    const [data, setData] = useState(null);
    const [selecteddata, setSelecteddata] = useState([]);
    const [displaydata, setDisplaydata] = useState([]);
    const [removedata, setRemovedata] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dummyjson.com/users");
                const jsonData = await response.json();
                setData(jsonData.users);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    function handlefunction(item) {
        if (!selecteddata.includes(item)) {
            setSelecteddata([...selecteddata, item]);
            // console.log('selected data',[...selecteddata,item]);
        }
    }

    function handleAdd() {
        const newItems = selecteddata.filter(item => !displaydata.includes(item));
        if (newItems.length > 0) {
            setDisplaydata([...displaydata, ...newItems]);
            setData(data.filter(dataItem => !selecteddata.includes(dataItem)));
            setSelecteddata([]);
        }
    }
    
    function handlefunction1(item) {
        if (!removedata.includes(item)) {
            setRemovedata([...removedata, item]);
        }
    }

    function handleRemove() {
        const remove=removedata.map(item=>item.id)
        console.log('remove',remove)
        const newdata=displaydata.filter((item)=>{
            if(!remove.includes(item.id)){
                // console.log(item)
                return item ; 
            }
            
    })
        setDisplaydata(newdata)
        setData([...data,...removedata])
        setRemovedata([])
    }
    function moveup(){
        const newdisplaydata =[...displaydata]
        const remove=removedata.map(item=>item.id)
        let index = displaydata.findIndex(item =>item.id==(remove));
        if(index>0){
           const  temp = newdisplaydata[index-1]
            newdisplaydata[index-1]=newdisplaydata[index] ;
            newdisplaydata[index]=temp
            setDisplaydata(newdisplaydata)
        }
    }


    return (
        <div className='selectContainer'>
            <div className='box'>
                <div className='row '>
                    <label>Select available column from:</label>
                    <div>
                        <select className='dropdown'>
                            <option> default1</option>
                            <option> default2</option>
                            <option> default3</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <label>Available column</label>
                    </div>
                    <div className='col move'>
                        <label>show these column in order</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='col opt'>
                        <table>
                            <tbody>
                                {data ? (
                                    data.map((item) => (
                                        <tr key={item.id} onClick={() => handlefunction(item)}>
                                            <td>{item.firstName}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr key="loading"><td>Loading...</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className='col addButton'>
                        <div>
                            <button onClick={() => handleAdd()}>ADD</button>
                            <button onClick={() => handleRemove()}>Remove</button>
                        </div>
                        <div>
                            <button>New Column</button>
                        </div>
                    </div>
                    <div className='col'>
                        <table>
                            <tbody>
                                {displaydata.map((item2) => (
                                    <tr key={item2.id} onClick={() => handlefunction1(item2)} >
                                        <td>{item2.firstName}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='row'>
                    <div className='col prop'>
                        <button className='pro me-4'>Properties</button>
                        <button>delete</button>
                    </div>
                    <div className='col move mb-3'>
                        <button className='me-4' onClick = {() => moveup()}>Move up</button>
                        <button>Move down</button>
                    </div>
                </div>
                <div className='col final move'>
                    <button className='me-4'>OK</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default Selection;