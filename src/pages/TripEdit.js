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
                    <div className="row">
                        <div className="col">
                            <label for="tripName">Trip Name</label>
                            <input type="text" className="form-control" name="tripName" onChange={handleChange} value={trip.tripName}/>
                        </div>
                        <div className="col">
                            <label for="tripOwner">Trip Owner:</label>
                            <input type="text" className="form-control" name="tripOwner" onChange={handleChange} value={trip.tripOwner}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label># Travelers:</label>
                            <input type="number" className="form-control" name="numTravelers" onChange={handleChange} value={trip.numTravelers}/>
                        </div>
                        <div className="col">
                            <label>Start Date:</label>
                            <input type="text" className="form-control" name="tripStart" onChange={handleChange} value={trip.tripStart}/>
                        </div>
                        <div className="col">
                            <label>End Date:</label>
                            <input type="text" className="form-control" name="tripEnd" onChange={handleChange} value={trip.tripEnd}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Car Year:</label>
                            <input type="number" className="form-control" name="carYear" onChange={handleChange} value={trip.carYear}/>
                        </div>
                        <div className="col">
                            <label>Car Make:</label>
                            <input type="text" className="form-control" name="carMake" onChange={handleChange} value={trip.carMake}/>
                       </div>
                        <div className="col">
                            <label>Car Model:</label>
                            <input type="text" className="form-control" name="carModel" onChange={handleChange} value={trip.carModel}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Start Point:</label>
                            <input type="text" className="form-control" name="startPoint" onChange={handleChange} value={trip.startPoint}/>
                        </div>
                        <div className="col">
                            <label>End Point:</label>
                            <input type="text" className="form-control" name="endPoint" onChange={handleChange} value={trip.endPoint}/>
                        </div>
                        <div className="col">
                            <label>Total Trip Distance:</label>
                            <input type="number" className="form-control" name="totalDistance" onChange={handleChange} value={trip.totalDistance}/>
                        </div>
                    </div>
                    <div className="row">
                       
                        <div className="col">
                            <label>Total MPC Hwy:</label>
                            <input type="number" className="form-control" name="distanceHwy" onChange={handleChange} value={trip.distanceHwy}/>
                        </div>
                        <div className="col">
                            <label>Total Charges:</label>
                            <input type="number" className="form-control" name="numStops" onChange={handleChange} value={trip.numStops}/>
                        </div>
                        <div className="col">
                            <label>Image:</label>
                            <input type="text" className="form-control" name="img" onChange={handleChange} value={trip.img} />
                        </div>
                    <div className="row">
                        
                        </div>
                        <div className="col">
                            <label for="notes">Notes:</label>
                            <textarea className="form-control" name="notes" rows="3" onChange={handleChange} value={trip.notes} />
                        </div>
                    </div>
                </div><br />
                <button type="submit" className="button">Edit Trip</button>
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