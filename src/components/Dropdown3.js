import React, { useState } from 'react';
import Data from './Contries.json';

function Dropdown4() {
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [district, setDistrict] = useState('');
    const [mandal, setMandal] = useState('');

    const getStates = () => {
        const selectedCountry = Data.nationalities.find(item => item.name === country);
        return selectedCountry ? selectedCountry.states.map(state => state.name) : [];
    };

    const getDistricts = () => {
        const selectedCountry = Data.nationalities.find(item => item.name === country);
        const selectedState = selectedCountry && selectedCountry.states ? selectedCountry.states.find(item => item.name === state) : null;
        return selectedState ? selectedState.districts.map(district => district.name) : [];
    };

    const getMandals = () => {
        const selectedCountry = Data.nationalities.find(item => item.name === country);
        const selectedState = selectedCountry && selectedCountry.states ? selectedCountry.states.find(item => item.name === state) : null;
        const selectedDistrict = selectedState && selectedState.districts ? selectedState.districts.find(item => item.name === district) : null;
        return selectedDistrict ? selectedDistrict.mandals : [];
    };

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
        setState('');
        setDistrict('');
        setMandal('');
    };

    const handleStateChange = (event) => {
        setState(event.target.value);
        setDistrict('');
        setMandal('');
    };

    const handleDistrictChange = (event) => {
        setDistrict(event.target.value);
        setMandal('');
    };

    const handleMandalChange = (event) => {
        setMandal(event.target.value);
    };

    return (
        <div>
            <select value={country} onChange={handleCountryChange}>
                <option value="">Select Country...</option>
                {Data.nationalities.map(country => (
                    <option key={country.name} value={country.name}>{country.name}</option>
                ))}
            </select>

            {country && (
                <div>
                    <select value={state} onChange={handleStateChange}>
                        <option value="">Select State...</option>
                        {getStates().map(state => (
                            <option key={state} value={state}>{state}</option>
                        ))}
                    </select>

                    {state && (
                        <div>
                            <select value={district} onChange={handleDistrictChange}>
                                <option value="">Select District...</option>
                                {getDistricts().map(district => (
                                    <option key={district} value={district}>{district}</option>
                                ))}
                            </select>

                            {district && (
                                <div>
                                    <select value={mandal} onChange={handleMandalChange}>
                                        <option value="">Select Mandal...</option>
                                        {getMandals().map(mandal => (
                                            <option key={mandal} value={mandal}>{mandal}</option>
                                        ))}
                                    </select>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Dropdown4;
