import React,{useState,useEffect} from 'react'
import Data from './states-and-districts.json';

function Dropdown_JSON() {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const getDistricts = () => {
    const selectedStateData = Data.states.find(state => state.state === selectedState);
    console.log(selectedStateData.districts)
    return selectedStateData ? selectedStateData.districts : [];
    
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedDistrict('');
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };
  return (
     <div>
      <label htmlFor="statesDropdown">Select a state:</label>
      <select id="statesDropdown" value={selectedState} onChange={handleStateChange}>
        <option value="">Select...</option>
        {/* Render options from state names */}
        {Data.states.map((state, index) => (
          <option key={index} value={state.state}>{state.state}</option>
        ))}
      </select>

      {/* Render district dropdown if a state is selected */}
      {selectedState && (
        <div>
          <label htmlFor="districtsDropdown">Select a district:</label>
          <select id="districtsDropdown" value={selectedDistrict} onChange={handleDistrictChange}>
            <option value="">Select...</option>
            {/* Render options from district names */}
            {getDistricts().map((district, index) => (
              <option key={index} value={district}>{district}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  )
}
export default Dropdown_JSON