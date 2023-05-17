function TopEvs( {cars}) {
    return cars.map((car) => (
        <div className="cars">
            <img className="car-image" src={car.img1} alt={car.make} />
            <h2 className="car-header">{car.year} {car.make} {car.model}</h2>
            <p className="car-review">{car.review} <a href={`top-evs-2023/${car._id}`}>Read more</a></p>
            <h6 className="car-score">{car.score}/10 score</h6>
            <h6 className="car-msrp">{car.msrpStart} - {car.msrpEnd}</h6>
            <h6 className="car-mileage">{car.mpgCity} City / {car.mpgHwy} Hwy</h6>
        </div>
    )
        
    );
}

export default TopEvs;