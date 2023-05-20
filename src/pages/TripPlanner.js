import { useState, useEffect } from 'react';
import { tripLoader } from '../apiCalls';

function TripPlanner() {
    const [tripInfo, setTripInfo] = useState([]);

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


    return tripInfo.map((trip) => (
       <>
        <h1>Planner Trips</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere at leo sit amet tempus. Donec ac volutpat lacus. Sed varius nibh nec dui viverra mollis. Fusce mattis nunc non aliquet rhoncus.</h2>
        <div className="add-trip">
            <a href='/'>Add Trip</a>
        </div>
        <div className="trips">
            <img className="trip-image" src={trip.img} alt={trip.tripName} />
            <div className="trip-details">
                <h3>Trip Name: {trip.tripName}</h3>
                <h3>Trip Owner: {trip.tripOwner}</h3>
                <h3># Travelers: {trip.numTravelers}</h3>
                <h3>Start Date: {trip.tripStart}</h3>
                <h3>End Date: {trip.tripEnd}</h3>
                <h3>Car: {trip.carYear} {trip.carMake} {trip.carModel}</h3>
                <h3>Start Point: {trip.startPoint}</h3>
                <h3>End Point: {trip.endPoint}</h3>
                <h3>Total Distance: {trip.totalDistance}</h3>
                <h3>Total MPC: {trip.distanceHwy}</h3>
                <h3>Total Charges:{trip.numStops}</h3>
                <h3>Notes: {trip.notes}</h3>
            </div>
            <div className="modify-trip">
                <a href="/">Edit Trip</a>
                <a href="/">Delete Trip</a>
            </div>
        </div>
        </>
    )
    ); 
}

export default TripPlanner;