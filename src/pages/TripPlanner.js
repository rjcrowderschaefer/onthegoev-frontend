import { useState, useEffect } from 'react';
import { tripLoader } from '../apiCalls';
import { Col, Row } from 'antd';

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

   
    return(
        <>
            <div className="trip-planner">
                <h2 className="page-title">Planned Trips</h2>
                <p className="page-intro">Use the trip planner tool to log and track your next adventure! The form below will help you determine the distance you'll be traveling and the number of charging stops required based on your vehicle type.</p>
                <div className="button">
                    <a href='/trip-planner/new'>Add New Trip</a>
                </div>
            </div>
            
            <Row gutter={[16]} justify="left" align="top">
                {
                    tripInfo.map(trip => {
                        return (
                            <>
                            <Col span={8}>
                                <div className="trip-column-left">
                                    <h3 className="trip-name">{trip.tripName}</h3>
                                    <div className="trip-image">
                                        <img className="trip-image" src={trip.img} alt={trip.tripName} />
                                    </div>
                                    <div className="show-trip">
                                            <a href={`trip-planner/${trip._id}`}>Show details</a>
                                    </div>
                                    <div className="modify-trip">
                                        <a href={`/trip-planner/${trip._id}/edit`}>Edit Trip</a>
                                    </div>
                                    <div className="delete-trip">
                                        <a href={`/trip-planner/${trip._id}/delete`}>Delete Trip</a>
                                    </div>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div className="trip-details">
                                    <h5>Trip Owner: {trip.tripOwner}</h5>
                                    <h5># Travelers: {trip.numTravelers}</h5>
                                    <h5>Start Date: {trip.tripStart}</h5>
                                    <h5>End Date: {trip.tripEnd}</h5>
                                    <h5>Car: {trip.carYear} {trip.carMake} {trip.carModel}</h5>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div className="trip-details">
                                <h5>Start Point: {trip.startPoint}</h5>
                                <h5>End Point: {trip.endPoint}</h5>
                                <h5>Total Trip Distance: {trip.totalDistance}</h5>
                                <h5>Total MPC Hwy: {trip.distanceHwy}</h5>
                                <h5>Total Charges:{trip.numStops}</h5>
                                <h5>Notes: {trip.notes}</h5>
                                </div>
                            </Col>
                            
                            </>
                        )
                           
                
                    })
                }
            </Row>
            </>
            

        )
    }; 



export default TripPlanner;