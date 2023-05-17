import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router';

function CarDetails() {

    const {id} = useParams();
    const [car, setCar] = useState(null)
    console.log(id)
    console.log(car)
    const fetchCarDetails = async () => {
        try {
            let data = await fetch (`http://localhost:4000/top-evs-2023/${id}`)
            console.log(data)
            data = await data.json();
            console.log(data)
            setCar(data);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCarDetails();
    }, [])

    function loaded() {
        return(
            <>
                <div key={id}>
                    <div className="details-container">
                        <h1>#{car.rank}: {car.year} {car.make} {car.model}</h1>
                        <h2>{car.review}</h2>
                        <h2>{car.score}</h2>
                        <img src={car.img1} alt={car.name}/>
                        <img src={car.img2} alt={car.name}/>
                        <img src={car.img3} alt={car.name}/>
                        <h3>Features and Specs:</h3>
                        <h5>{car.featuresAndSpecs.spec1}</h5>
                        <h5>{car.featuresAndSpecs.spec2}</h5>
                        <h5>{car.featuresAndSpecs.spec3}</h5>
                        <h5>{car.featuresAndSpecs.spec4}</h5>
                        <h3>Pros:</h3>
                        <h5>{car.pros.pro1}</h5>
                        <h5>{car.pros.pro2}</h5>
                        <h5>{car.pros.pro3}</h5>
                        <h5>{car.pros.pro4}</h5>
                        <h3>Cons:</h3>
                        <h5>{car.cons.con1}</h5>
                        <h5>{car.cons.con2}</h5>
                        <h5>{car.cons.con3}</h5>
                        <h5>{car.cons.con4}</h5>
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