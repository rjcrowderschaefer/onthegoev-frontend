import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';

function ChargingLocations() {

    const [chargingLocations, setLocations] = useState(null);
    const [zipCode, setZipCode] = useState("");

    async function fetchLocationInfo(e) {
        e.preventDefault()
        try {
            const response = await fetch(`https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?limit=24&fuel_type=ELEC&location=${zipCode}&api_key=${process.env.REACT_APP_NREL_API_KEY}`);
            const data = await response.json();
            setLocations(data);
            console.log(response)
            console.log(data);
        } catch(err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        setZipCode(e.target.value)
    }


    return (
        <>
            <div className="charging-locations">
                <Row>
                    <Col span={14}>
                        <h2 className="page-title">List of charging stations</h2>
                        <p className="page-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere at leo sit amet tempus. Donec ac volutpat lacus. Sed varius nibh nec dui viverra mollis. Fusce mattis nunc non aliquet rhoncus.</p>
                    </Col>
                    <Col span={10}>
                        <div className="location-search">
                            <form onSubmit={fetchLocationInfo}>
                                <label htmlFor="location"></label>
                                <input type="text" placeholder="Enter zip code" name="location" id="location" onChange={handleChange} value={zipCode}/>
                                <input type="submit" id="search-button" value=">" />
                            </form>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row gutter={[25, 25]} justify="left" align="top">
                {
                    chargingLocations && chargingLocations.fuel_stations.map(location => {
                        return (
                            <Col span={6}>
                            <div className="charging-card">
                                <h4 className="charging-header">{location.station_name}</h4>
                                <h6>Distance: {location.distance} miles</h6>
                                <h6 className="charging-address">Address: {location.street_address}, {location.city}, {location.state}, {location.zip}</h6>
                                <h6>Connector type(s): {location.ev_connector_types}</h6>
                                <h6>EV network: {location.ev_network}</h6>
                            </div>
                        </Col>
                        )
                    })
                }
            </Row>
        </div>
        </>
    )
}

export default ChargingLocations;