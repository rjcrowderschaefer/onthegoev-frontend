import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

function TripEdit() {
    const {id} = useParams();
    const [trip, setTrip] = useState(null);
    const navigate = useNavigate();
    async function getTrip() {
        try {
            let myTrip = await fetch(`http://localhost:4000/trip-planner/${id}`);
            myTrip = await myTrip.json();
            setTrip(myTrip);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getTrip();
    }, []);

    function handleChange(e) {
        setTrip((currentState) => ({
            ...currentState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            await fetch(`http://localhost:4000/trip-planner/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(trip)
            });
            return navigate(`/trip-planner/${id}`);
        } catch(err) {
            console.log(err);
        }
    }

function loaded() {
    return(
        <>
            <h2>Edit {trip.tripName} Trip</h2>
            <form onSubmit={handleSubmit}>
                Trip Name: <input type="text" value={trip.tripName} name="tripName" onChange={handleChange} />
                Trip Owner: <input type="text" value={trip.tripOwner} name="tripOwner" onChange={handleChange} />
                # Travelers: <input type="number" value={trip.numTravelers} name="numTravelers" onChange={handleChange} />
                Start Date: <input type="text" value={trip.tripStart} name="startDate" onChange={handleChange} />
                End Date: <input type="text" value={trip.tripEnd} name="endDate" onChange={handleChange} />
                Car Year: <input type="number" value={trip.carYear} name="carYear" onChange={handleChange} />
                Car Make: <input type="text" value={trip.carMake} name="carMake" onChange={handleChange} />
                Car Model: <input type="text" value={trip.carModel} name="carModel" onChange={handleChange} />
                Start Point: <input type="text" value={trip.startPoint} name="startPoint" onChange={handleChange} />
                End Point: <input type="text" value={trip.endPoint} name="endPoint" onChange={handleChange} />
                Total Trip Distance: <input type="number" value={trip.totalDistance} name="totalDistance" onChange={handleChange} />
                Total MPC Hwy: <input type="number" value={trip.distanceHwy} name="distanceHwy" onChange={handleChange} />
                Total Charges: <input type="number" value={trip.numStops} name="numStops" onchange={handleChange} />
                Notes: <input type="text" value={trip.notes} name="notes" onChange={handleChange} />
                Image: <input type="text" value={trip.img} name="img" onChange={handleChange} />
                <button>Edit Trip</button>
            </form>
        </>
    )
}
    return (
        <>
            {trip ? loaded() : <h2>Loading...</h2>}
        </>
    )
}

export default TripEdit;