import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Select } from 'antd';

function CreateTrip() {
    const navigate = useNavigate();
    const [tripForm, setTripForm] = useState({
        tripName: "",
        tripOwner: "",
        numTravelers: 0,
        tripStart: "",
        tripEnd: "",
        carYear: 0,
        carMake: "",
        carModel: "",
        distanceHwy: 0,
        startPoint: "",
        endPoint: "",
        totalDistance: 0,
        numStops: 0,
        notes: "",
        img: "",
    })

    async function getTrips() {
        try {
            let myTrips = await fetch('http://localhost:4000/trip-planner')
            myTrips = await myTrips.json();
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getTrips();
    }, []);

    const handleChange = (e) => {
        setTripForm({ ...tripForm, [e.target.name]: e.target.value});
    };
    

    console.log(tripForm);

    async function handleSubmit(e) {
        try {
        e.preventDefault()
        await fetch('http://localhost:4000/trip-planner', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tripForm)
        })
        getTrips();
        e.target.reset();
        navigate('/trip-planner');
        } catch(err) {
        console.log(err);
        }
    }

    return(
        <>
            <div className="add-new-trip">
            <h2 className="page-title">Add a new trip</h2>
            <p className="page-intro">Use the trip planner tool to log and track your next adventure! The form below will help you determine the distance you'll be traveling and the number of charging stops required based on your vehicle type.</p>
            <form onSubmit={handleSubmit}>
                
                <div className="form-group">
                    <div className="row">
                        <div className="col">
                            <label for="tripName">Trip Name</label>
                            <input type="text" className="form-control" name="tripName" onChange={handleChange} placeholder="Where are you headed?"/>
                        </div>
                        <div className="col">
                            <label for="tripOwner">Trip Owner:</label>
                            <input type="text" className="form-control" name="tripOwner" onChange={handleChange} placeholder="Main point of contact"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label># Travelers:</label>
                            <input type="number" className="form-control" name="numTravelers" onChange={handleChange} placeholder="How many travelers"/>
                        </div>
                        <div className="col">
                            <label>Start Date:</label>
                            <input type="text" className="form-control" name="tripStart" onChange={handleChange} placeholder="Start date of trip"/>
                        </div>
                        <div className="col">
                            <label>End Date:</label>
                            <input type="text" className="form-control" name="tripEnd" onChange={handleChange} placeholder="End date of trip"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Car Year:</label>
                            <input type="number" className="form-control" name="carYear" onChange={handleChange} placeholder="Car year"/>
                        </div>
                        <div className="col">
                            <label>Car Make:</label>
                            <input type="text" className="form-control" name="carMake" onChange={handleChange} placeholder="Car make"/>
                        </div>
                        <div className="col">
                            <label>Car Model:</label>
                            <input type="text" className="form-control" name="carModel" onChange={handleChange} placeholder="Car model"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Start Point:</label>
                            <input type="text" className="form-control" name="startPoint" onChange={handleChange} placeholder="Trip starting location"/>
                        </div>
                        <div className="col">
                            <label>End Point:</label>
                            <input type="text" className="form-control" name="endPoint" onChange={handleChange} placeholder="Trip end location"/>
                        </div>
                        <div className="col">
                            <label>Total Trip Distance:</label>
                            <input type="number" className="form-control" name="totalDistance" onChange={handleChange} placeholder="Total distance of trip"/>
                        </div>
                    </div>
                    <div className="row">
                       
                        <div className="col">
                            <label>Total MPC Hwy:</label>
                            <input type="number" className="form-control" name="distanceHwy" onChange={handleChange} placeholder="Total miles per charge (hwy)"/>
                        </div>
                        <div className="col">
                            <label>Total Charges:</label>
                            <input type="number" className="form-control" name="numStops" onChange={handleChange} placeholder="Number of stops to charge"/>
                        </div>
                        <div className="col">
                            <label>Image:</label>
                            <input type="file" className="form-control" name="img" onChange={handleChange} placeholder="Add trip image" />
                        </div>
                    <div className="row">
                        
                        </div>
                        <div className="col">
                            <label for="notes">Notes:</label>
                            <textarea className="form-control" name="notes" rows="3" onChange={handleChange} placeholder="Add trip notes here" />
                        </div>
                    </div>
                </div><br />
                <button type="submit" className="button ">Create Trip</button>
            </form>
        </div>
        </>
    )

}

export default CreateTrip;