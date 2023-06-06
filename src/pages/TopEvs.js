import { useState, useEffect } from 'react';
import { carsLoader } from '../apiCalls';
import { Col, Row } from 'antd';

function TopEvs() {
    const [carInfo, setCarInfo] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const data = await carsLoader();
                setCarInfo(data);
        } catch(err) {
            console.log(err);
        }
    }
    fetchCars();
}, []);


    // return carInfo.map((car) => (
    //     <div className="cars">
    //         <div className="car-card">
    //         <img className="car-image" src={car.img1} alt={car.make} />
    //         <h2 className="car-header">{car.year} {car.make} {car.model}</h2>
    //         <p className="car-review">{car.review} <a href={`top-evs-2023/${car._id}`}>Read more</a></p>
    //         <h6 className="car-score">{car.score}/10 score</h6>
    //         <h6 className="car-msrp">{car.msrpStart} - {car.msrpEnd}</h6>
    //         <h6 className="car-mileage">{car.mpgCity} City / {car.mpgHwy} Hwy</h6>
    //         </div>
    //     </div>
    // )
        
    // );

    return (
        <>
        <div className="cars">
            <h2 className="page-title">Best Electric Vehicles of 2023</h2>
            <p className="page-intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere at leo sit amet tempus. Donec ac volutpat lacus. Sed varius nibh nec dui viverra mollis. Fusce mattis nunc non aliquet rhoncus. </p>
            <Row gutter={[75, 16]} justify="left" alidn="top">
                {
                    carInfo.map(car => {
                        return (
                            <Col span={8}>
                            <div className="car-card">
                                <div className="car-image">
                                    <img src={car.img1} alt={car.make} />
                                </div>
                            <h2 className="car-header"><b>#{car.rank}</b> {car.year} {car.make} {car.model}</h2>
                            <p className="car-review">{car.review} <a href={`top-evs-2023/${car._id}`}>Read more</a></p>
                            <div className="car-card-details">
                                <h6 className="car-score"><b>{car.score}</b> <div className="card-label">score</div></h6>
                                <h6 className="car-msrp"><b>{car.msrpStart}</b> - <b>{car.msrpEnd}</b> <div className="card-label">MSRP</div></h6>
                                <h6 className="car-mileage"><b>{car.mpgCity} City / {car.mpgHwy} Hwy</b> <div className="card-label">MPGe</div></h6>
                            </div>
                            </div>
                        </Col>
                        )
                    })
                }
            </Row>
        </div>
        </>
     )
}


export default TopEvs;