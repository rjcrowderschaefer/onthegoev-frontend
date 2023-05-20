import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
            <form onSubmit={handleSubmit}>
                <label>Trip Name:</label>
                <input type="text" name="tripName" onChange={handleChange} placeholder="Trip name"/>
                <label>Trip Owner:</label>
                <input type="text" name="tripOwner" onChange={handleChange} placeholder="Trip owner"/>
                <label># Travelers:</label>
                <input type="number" name="numTravelers" onChange={handleChange} placeholder="Num of travelers"/>
                <label>Start Date:</label>
                <input type="text" name="tripStart" onChange={handleChange} placeholder="Start date of trip"/>
                <label>End Date:</label>
                <input type="text" name="tripEnd" onChange={handleChange} placeholder="End date of trip"/>
                <label>Car Year:</label>
                <input type="number" name="carYear" onChange={handleChange} placeholder="Car year"/>
                <label>Car Make:</label>
                <input type="text" name="carMake" onChange={handleChange} placeholder="Car make"/>
                <label>Car Model:</label>
                <input type="text" name="carModel" onChange={handleChange} placeholder="Car model"/>
                <label>Start Point:</label>
                <input type="text" name="startPoint" onChange={handleChange} placeholder="Trip starting location"/>
                <label>End Point:</label>
                <input type="text" name="endPoint" onChange={handleChange} placeholder="Trip end location"/>
                <label>Total Trip Distance:</label>
                <input type="number" name="totalDistance" onChange={handleChange} placeholder="Total distance of trip"/>
                <label>Total MPC Hwy:</label>
                <input type="number" name="distanceHwy" onChange={handleChange} placeholder="Total miles per charge (hwy)"/>
                <label>Total Charges:</label>
                <input type="number" name="numStops" onChange={handleChange} placeholder="Number of stops to charge"/>
                <label>Notes:</label>
                <input type="text" name="notes" onChange={handleChange} placeholder="Add trip notes here" />
                <label>Image:</label>
                <input type="text" name="img" onChange={handleChange} placeholder="Add trip image" />
                <button>Create Trip</button>
            </form>
        </>
    )

}

export default CreateTrip;