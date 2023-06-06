import { useState, useEffect } from 'react';
import { tripLoader } from '../apiCalls';
import { Col, Row } from 'antd';

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
            <div className="trip-planner">
                <h2 className="page-title">Planned Trips</h2>
                <p className="page-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere at leo sit amet tempus. Donec ac volutpat lacus. Sed varius nibh nec dui viverra mollis. Fusce mattis nunc non aliquet rhoncus.</p>
            </div>
            <Row gutter={[75, 16]} justify="left" align="top">
                {
                    tripInfo.map(trip => {
                        return
                    })
                }
            </Row>
            {/* {tripInfo.map((trip, idx) => {
               dturn(
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
                        {/* </div>
                        <div className="trip-details">
                            <a href={`trip-planner/${trip._id}`}>Show details</a>
                        </div> */}
                        {/* <div className="modify-trip">
                            <a href="/">Edit Trip</a>
                            <a href="/">Delete Trip</a>
                        </div> */}
                    {/* </div>
                    </div> */}
                    {/* )
                })} */}
            </>
            

        )
    }; 



export default TripPlanner;