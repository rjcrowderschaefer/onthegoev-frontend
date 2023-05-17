import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router';

function CarDetails() {

    const {_id} = useParams();
    const [car, setCar] = useState(null)

    const fetchCarDetails = async () => {
        try {
            let data = await fetch (`http://localhost:4000/top-evs-2023/${_id}`)
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
                <div key={_id}>
                    <div className="details-container">
                        <h1>{car.year} {car.make} {car.model}</h1>
                        <h2>{car.review}</h2>
                        <img src={car.img1} alt={car.name}/>
                        <img src={car.img2} alt={car.name}/>
                        <img src={car.img3} alt={car.name}/>
                        <h5>Features and Specs:</h5>
                        <h7>{car.spec1}</h7>
                        <h7>{car.spec2}</h7>
                        <h7>{car.spec3}</h7>
                        <h7>{car.spec4}</h7>
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