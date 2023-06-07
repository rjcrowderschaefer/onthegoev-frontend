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

    return (
        <>
        <div className="cars">
            <h2 className="page-title">Best Electric Vehicles of 2023</h2>
            <p className="page-intro">We’ve selected the best electric cars you can buy today that include a wide range of SUVs, hatchbacks, sedans, and even pickup trucks. Whether you’re interested in an electric car, SUV, or truck, you’ll find the EVs on our 2023 Editors' Choice list are capable, efficient, and—yes—exciting. </p>
            <Row gutter={[75, 16]} justify="left" align="top">
                {
                    carInfo.map(car => {
                        return (
                            <Col span={8}>
                            <div className="car-card">
                                <div className="car-image">
                                    <img src={car.img1} alt={car.make} />
                                </div>
                            <h2 className="car-header"><b>#{car.rank}:</b> {car.year} {car.make} {car.model}</h2>
                            <p className="car-review">{car.review} <a href={`top-evs-2023/${car._id}`}><br />Read more >></a></p>
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