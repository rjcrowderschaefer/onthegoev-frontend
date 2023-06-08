import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Col, Row } from 'antd';

function CarDetails() {

    const {id} = useParams();
    const [car, setCar] = useState(null)
    const fetchCarDetails = async () => {
        try {
            let data = await fetch (`http://localhost:4000/top-evs-2023/${id}`)
            data = await data.json();
            setCar(data);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCarDetails();
    }, [])

    function loaded() {
        return (
            <>
                <div key={id}>
                    <div className="car-details">
                        <Row gutter={[20, 20]}>
                            <Col span={12}>
                                <h2 className="page-title">{car.year} {car.make} {car.model}</h2>
                                <p className="page-intro" id= "car-details-review">{car.review}</p></Col>
                            <Col span={12}>
                                <div className="details-rating">
                                    <h2><span id="overall-rating">Overall Rating</span><br /><div id="details-rating-score-container"><span id="car-details-score">{car.score}</span><span id="car-details-10">/10</span></div></h2>
                                </div></Col>
                        </Row>
                        <Row gutter={[20, 20]}>
                            <Col span={8}><img src={car.img1} alt={car.name}/></Col>
                            <Col span={8}><img src={car.img2} alt={car.name}/></Col>
                            <Col span={8}><img src={car.img3} alt={car.name}/></Col>
                        </Row>
                        <Row gutter={[20, 20]}>
                            <Col span={8}>
                                <div className="details-list">
                                    <h4>Features and Specs</h4>
                                    <h6>{car.featuresAndSpecs.spec1}</h6>
                                    <h6>{car.featuresAndSpecs.spec2}</h6>
                                    <h6>{car.featuresAndSpecs.spec3}</h6>
                                    <h6>{car.featuresAndSpecs.spec4}</h6>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div className="details-list">
                                    <h4>Pros</h4>
                                    <h6>{car.pros.pro1}</h6>
                                    <h6>{car.pros.pro2}</h6>
                                    <h6>{car.pros.pro3}</h6>
                                    <h6>{car.pros.pro4}</h6>
                                </div>    
                            </Col>
                            <Col span={8}>
                                <div className="details-list">
                                    <h4>Cons</h4>
                                    <h6>{car.cons.con1}</h6>
                                    <h6>{car.cons.con2}</h6>
                                    <h6>{car.cons.con3}</h6>
                                    <h6>{car.cons.con4}</h6>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </>
        )
    }

    function loading() {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <>
            {car ? loaded() : loading()}
        </>
    )
};

export default CarDetails;