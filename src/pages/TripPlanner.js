import { useState, useEffect } from 'react';
import { tripLoader } from '../apiCalls';

function TripPlanner() {
    const [tripInfo, setTripInfo] = useState([]);
    // const [tripForm, setTripForm] = useState({
    //     tripName: "",
    //     tripOwner: "",
    //     numTravelers: 0,
    //     tripStart: "",
    //     tripEnd: "",
    //     carYear: 0,
    //     carMake: "",
    //     carModel: "",
    //     distanceHwy: 0,
    //     startPoint: "",
    //     endPoint: "",
    //     totalDistance: 0,
    //     numStops: 0,
    //     notes: "",
    //     img: "",
    // })

    useEffect(() => {
        const fetchTrips = async () => {
            try {
                const data = await tripLoader();
                setTripInfo(data);
            } catch(err) {
                console.log(err);
            }
        }
        fetchTrips();
    }, []);

   
    return(
        <>
            {tripInfo.map((trip, idx) => {
                return(
                    <div key={idx}>
                    <h1>Planner Trips</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere at leo sit amet tempus. Donec ac volutpat lacus. Sed varius nibh nec dui viverra mollis. Fusce mattis nunc non aliquet rhoncus.</h2>
                    <div className="add-trip">
                        <a href='/trip-planner/new'>Add New Trip</a>
                    </div>
                    <div className="trips">
                        <div className="trip-details">
                            <h3>{trip.tripName}</h3>
                            <img className="trip-image" src={trip.img} alt={trip.tripName} />
                            <h3>Trip Owner: {trip.tripOwner}</h3>
                            <h3># Travelers: {trip.numTravelers}</h3>
                            <h3>Start Date: {trip.tripStart}</h3>
                            {/* <h3>End Date: {trip.tripEnd}</h3>
                            <h3>Car: {trip.carYear} {trip.carMake} {trip.carModel}</h3>
                            <h3>Start Point: {trip.startPoint}</h3>
                            <h3>End Point: {trip.endPoint}</h3>
                            <h3>Total Trip Distance: {trip.totalDistance}</h3>
                            <h3>Total MPC Hwy: {trip.distanceHwy}</h3>
                            <h3>Total Charges:{trip.numStops}</h3>
                            <h3>Notes: {trip.notes}</h3> */}
                        </div>
                        <div className="trip-details">
                            <a href={`trip-planner/${trip._id}`}>Show details</a>
                        </div>
                        {/* <div className="modify-trip">
                            <a href="/">Edit Trip</a>
                            <a href="/">Delete Trip</a>
                        </div> */}
                    </div>
                    </div>
                    )
                })}
            </>
        )
    }; 

    // function handleChange(e) {
    //     console.log(e.target);
    //     setTripForm((previousFormState) => ({
    //         ...previousFormState,
    //         [e.target.name]: e.target.value
    //     }))
    // }
    // async function handleSubmit(e) {
    //     try {
    //         e.preventDefault();
    //         await fetch('http://localhost:4000/trip-planner', {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(tripForm)
    //         })
    //     } catch(err) {
    //         console.log(err);
    //     }
    // }

    // return (
    //     {tripInfo ? loaded() : <h2>Loading...</h2>}
    // )

    // return(
    //     <>
    //         <form onSubmit={handleSubmit}>
    //             <label>Trip Name:</label>
    //             <input type="text" name="tripName" onChange={handleChange} placeholder="Trip name"/>
    //             <label>Trip Owner:</label>
    //             <input type="text" name="tripOwner" onChange={handleChange} placeholder="Trip owner"/>
    //             <label># Travelers:</label>
    //             <input type="number" name="numTravelers" onChange={handleChange} placeholder="Num of travelers"/>
    //             <label>Start Date:</label>
    //             <input type="text" name="startDate" onChange={handleChange} placeholder="Start date of trip"/>
    //             <label>End Date:</label>
    //             <input type="text" name="endDate" onChange={handleChange} placeholder="End date of trip"/>
    //             <label>Car Year:</label>
    //             <input type="number" name="carYear" onChange={handleChange} placeholder="Car year"/>
    //             <label>Car Make:</label>
    //             <input type="text" name="carMake" onChange={handleChange} placeholder="Car make"/>
    //             <label>Car Model:</label>
    //             <input type="text" name="carModel" onChange={handleChange} placeholder="Car model"/>
    //             <label>Start Point:</label>
    //             <input type="text" name="startPoint" onChange={handleChange} placeholder="Trip starting location"/>
    //             <label>End Point:</label>
    //             <input type="text" name="endPoint" onChange={handleChange} placeholder="Trip end location"/>
    //             <label>Total Trip Distance:</label>
    //             <input type="number" name="totalDistance" onChange={handleChange} placeholder="Total distance of trip"/>
    //             <label>Total MPC Hwy:</label>
    //             <input type="number" name="distanceHwy" onChange={handleChange} placeholder="Total miles per charge (hwy)"/>
    //             <label>Total Charges:</label>
    //             <input type="number" name="numStops" onchange={handleChange} placeholder="Number of stops to charge"/>
    //             <label>Notes:</label>
    //             <input type="text" name="notes" onChange={handleChange} placeholder="Add trip notes here" />
    //             <label>Image:</label>
    //             <input type="text" name="img" onChange={handleChange} placeholder="Add trip image" />
    //             <button>Create Trip</button>
    //         </form>
    //         {tripInfo.length ? loaded(tripInfo) : <h2>Loading...</h2>}
    //     </>
    // )


export default TripPlanner;