function TripPlanner( {trips} ) {
    return trips.map((trip) => (
        <div className="trips">
            <h2 className="trip-header">{trip.tripName}</h2>
        </div>
    )) (
        
    )
}

export default TripPlanner;