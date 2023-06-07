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
            <div className="edit-trip">
            <h2 className="page-title">Edit {trip.tripName} Trip</h2>
            <p className="page-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere at leo sit amet tempus. Donec ac volutpat lacus. Sed varius nibh nec dui viverra mollis. Fusce mattis nunc non aliquet rhoncus.</p>
            <form onSubmit={handleSubmit}>
                
                <div className="form-group">
                    <div class="row">
                        <div class="col">
                            <label for="tripName">Trip Name</label>
                            <input type="text" class="form-control" name="tripName" onChange={handleChange} value={trip.tripName}/>
                        </div>
                        <div class="col">
                            <label for="tripOwner">Trip Owner:</label>
                            <input type="text" class="form-control" name="tripOwner" onChange={handleChange} value={trip.tripOwner}/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label># Travelers:</label>
                            <input type="number" class="form-control" name="numTravelers" onChange={handleChange} value={trip.numTravelers}/>
                        </div>
                        <div class="col">
                            <label>Start Date:</label>
                            <input type="text" class="form-control" name="tripStart" onChange={handleChange} value={trip.tripStart}/>
                        </div>
                        <div class="col">
                            <label>End Date:</label>
                            <input type="text" class="form-control" name="tripEnd" onChange={handleChange} value={trip.tripEnd}/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label>Car Year:</label>
                            <input type="number" class="form-control" name="carYear" onChange={handleChange} value={trip.carYear}/>
                        </div>
                        <div class="col">
                            <label>Car Make:</label>
                            <input type="text" class="form-control" name="carMake" onChange={handleChange} value={trip.carMake}/>
                       </div>
                        <div class="col">
                            <label>Car Model:</label>
                            <input type="text" class="form-control" name="carModel" onChange={handleChange} value={trip.carModel}/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label>Start Point:</label>
                            <input type="text" class="form-control" name="startPoint" onChange={handleChange} value={trip.startPoint}/>
                        </div>
                        <div class="col">
                            <label>End Point:</label>
                            <input type="text" class="form-control" name="endPoint" onChange={handleChange} value={trip.endPoint}/>
                        </div>
                        <div class="col">
                            <label>Total Trip Distance:</label>
                            <input type="number" class="form-control" name="totalDistance" onChange={handleChange} value={trip.totalDistance}/>
                        </div>
                    </div>
                    <div class="row">
                       
                        <div class="col">
                            <label>Total MPC Hwy:</label>
                            <input type="number" class="form-control" name="distanceHwy" onChange={handleChange} value={trip.distanceHwy}/>
                        </div>
                        <div class="col">
                            <label>Total Charges:</label>
                            <input type="number" class="form-control" name="numStops" onChange={handleChange} value={trip.numStops}/>
                        </div>
                        <div class="col">
                            <label>Image:</label>
                            <input type="text" class="form-control" name="img" onChange={handleChange} value={trip.img} />
                        </div>
                    <div class="row">
                        
                        </div>
                        <div class="col">
                            <label for="notes">Notes:</label>
                            <textarea class="form-control" name="notes" rows="3" onChange={handleChange} value={trip.notes} />
                        </div>
                    </div>
                </div><br />
                <button type="submit" class="button">Edit Trip</button>
            </form>
        </div>
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