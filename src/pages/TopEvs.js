function TopEvs( {cars}) {
    return cars.map((car) => (
        <div className="cars">
            <img className="car-image" src={car.img1} alt={car.make} />
            <h2 className="car-header">{car.year} {car.make} {car.model}</h2>
            <p className="car-review">{car.review} <a href="/{car.">Read more</a></p>
            <h7 className="car-score">{car.score}/10 score</h7><br />
            <h7 className="car-msrp">{car.msrpStart} - {car.msrpEnd}</h7><br />
            <h7 className="car-mileage">{car.mpgCity} City / {car.mpgHwy} Hwy</h7>
        </div>
    )
        
    );
}

export default TopEvs;