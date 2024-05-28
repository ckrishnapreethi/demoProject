import React,{useState} from 'react'



function Dropdown() {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleChange = (event) => {
        let x= event.target.value;
        setSelectedOption(x)
        console.log(x)
      };
  return (
    <div> 
    <select onChange={handleChange}>
    <option value="">Select an option</option>
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
  {selectedOption && <p>Selected option: {selectedOption}</p>}
  </div>
  )
}
const options = ["preethi", "Abhi", "Sneha", "pranavi"];

const App = () => {
  // return (
  //   <div>
  //     <h1>Dropdown Example</h1>
  //     <Dropdown options={options} />
  //   </div>
  // );
};

export default Dropdown