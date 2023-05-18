import React, { useState, useEffect } from 'react';
// import {Link } from 'react-router-dom';

function ChargingLocations() {

    const [chargingLocations, setLocations] = useState(null);
    const [zipCode, setZipCode] = useState("");

    async function fetchLocationInfo(e) {
        e.preventDefault()
        try {
            const response = await fetch(`https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?limit=20&fuel_type=ELEC&location=${zipCode}&api_key=${process.env.REACT_APP_NREL_API_KEY}`);
            const data = await response.json();
            setLocations(data);
            console.log(response)
            console.log(data);
        } catch(err) {
            console.log(err);
        }
    };

    // useEffect(() => {
    //     fetchLocationInfo();
    // }, [])

    const handleChange = (e) => {
        setZipCode(e.target.value)
    }


    return (
        <>
            <h1>This is my charging locations page</h1>
            <form onSubmit={fetchLocationInfo}>
                <label htmlFor="location">Location:</label>
                <input type="text" name="location" id="location" onChange={handleChange} value={zipCode}/>
                <input type="submit" value="Search" />
            </form>
            {chargingLocations && chargingLocations.fuel_stations.map((location, idx) => {
                return (
                    <h3 key={idx}>{location.station_name}</h3>
                )
            })}
            
        </>
    )
}

export default ChargingLocations;