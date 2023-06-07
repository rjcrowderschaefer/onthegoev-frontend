import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';

function TripDetails() {
    const {id} = useParams();
    const [trip, setTrip] = useState(null)
    console.log(id)
    console.log(trip)
    const fetchTripDetails = async () => {
        try {
            let data = await fetch(`http://localhost:4000/trip-planner/${id}`)
            data = await data.json();
            setTrip(data)
        } catch(err) {
            console.log(err)
        }
    }

    function loaded() {
        return(
            <>
                <div className="trip-show">
                    <h2 className="page-title">{trip.tripName}</h2>
                <div key={id}>
                    <div className="trip-details-container">
                    <img className="trip-image" src={trip.img} alt={trip.tripName} />
                        <div className="trip-details">
                          
                            <h3>Trip Owner: {trip.tripOwner}</h3>
                            <h3># Travelers: {trip.numTravelers}</h3>
                            <h3>Start Date: {trip.tripStart}</h3>
                            <h3>End Date: {trip.tripEnd}</h3>
                            <h3>Car: {trip.carYear} {trip.carMake} {trip.carModel}</h3>
                        
                            <h3>Start Point: {trip.startPoint}</h3>
                            <h3>End Point: {trip.endPoint}</h3>
                            <h3>Total Trip Distance: {trip.totalDistance}</h3>
                            <h3>Total MPC Hwy: {trip.distanceHwy}</h3>
                            <h3>Total Charges:{trip.numStops}</h3>
                            <h3>Notes: {trip.notes}</h3>
                        
                        </div>
                        <div className="modify-trip">
                            <Link to={`/trip-planner/${id}/edit`}>
                                <button>Edit</button>
                            </Link>
                            <Link to={`/trip-planner/${id}/delete`}>
                                <button>Delete</button>
                            </Link>
                        </div>
                    </div>
                </div>
               
                </div>
            </>

        )
    }

    useEffect(() => {
        fetchTripDetails();
    }, [])

    function loading() {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <>
            {trip ? loaded() : loading()}
        </>
    )
};

export default TripDetails