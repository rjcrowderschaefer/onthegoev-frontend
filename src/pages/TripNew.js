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
            <p className="page-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere at leo sit amet tempus. Donec ac volutpat lacus. Sed varius nibh nec dui viverra mollis. Fusce mattis nunc non aliquet rhoncus.</p>
            <form onSubmit={handleSubmit}>
                
                <div className="form-group">
                    <div class="row">
                        <div class="col">
                            <label for="tripName">Trip Name</label>
                            <input type="text" class="form-control" name="tripName" onChange={handleChange} placeholder="Where are you headed?"/>
                        </div>
                        <div class="col">
                            <label for="tripOwner">Trip Owner:</label>
                            <input type="text" class="form-control" name="tripOwner" onChange={handleChange} placeholder="Main point of contact"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label># Travelers:</label>
                            <input type="number" class="form-control" name="numTravelers" onChange={handleChange} placeholder="How many travelers"/>
                        </div>
                        <div class="col">
                            <label>Start Date:</label>
                            <input type="text" class="form-control" name="tripStart" onChange={handleChange} placeholder="Start date of trip"/>
                        </div>
                        <div class="col">
                            <label>End Date:</label>
                            <input type="text" class="form-control" name="tripEnd" onChange={handleChange} placeholder="End date of trip"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label>Car Year:</label>
                            <input type="number" class="form-control" name="carYear" onChange={handleChange} placeholder="Car year"/>
                        </div>
                        <div class="col">
                            <label>Car Make:</label>
                            <input type="text" class="form-control" name="carMake" onChange={handleChange} placeholder="Car make"/>
                        </div>
                        <div class="col">
                            <label>Car Model:</label>
                            <input type="text" class="form-control" name="carModel" onChange={handleChange} placeholder="Car model"/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label>Start Point:</label>
                            <input type="text" class="form-control" name="startPoint" onChange={handleChange} placeholder="Trip starting location"/>
                        </div>
                        <div class="col">
                            <label>End Point:</label>
                            <input type="text" class="form-control" name="endPoint" onChange={handleChange} placeholder="Trip end location"/>
                        </div>
                        <div class="col">
                            <label>Total Trip Distance:</label>
                            <input type="number" class="form-control" name="totalDistance" onChange={handleChange} placeholder="Total distance of trip"/>
                        </div>
                    </div>
                    <div class="row">
                       
                        <div class="col">
                            <label>Total MPC Hwy:</label>
                            <input type="number" class="form-control" name="distanceHwy" onChange={handleChange} placeholder="Total miles per charge (hwy)"/>
                        </div>
                        <div class="col">
                            <label>Total Charges:</label>
                            <input type="number" class="form-control" name="numStops" onChange={handleChange} placeholder="Number of stops to charge"/>
                        </div>
                        <div class="col">
                            <label>Image:</label>
                            <input type="file" class="form-control" name="img" onChange={handleChange} placeholder="Add trip image" />
                        </div>
                    <div class="row">
                        
                        </div>
                        <div class="col">
                            <label for="notes">Notes:</label>
                            <textarea class="form-control" name="notes" rows="3" onChange={handleChange} placeholder="Add trip notes here" />
                        </div>
                    </div>
                </div><br />
                <button type="submit" class="button ">Create Trip</button>
            </form>
        </div>
        </>
    )

}

export default CreateTrip;