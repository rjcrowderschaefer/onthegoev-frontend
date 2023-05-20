import React from 'react';
import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import TopEvs from './pages/TopEvs';
import CarDetails from './pages/CarDetails';
import BeforeYouGo from './pages/BeforeYouGo';
import TripPlanner from './pages/TripPlanner';
import TripDetails from './pages/TripDetails';
import ChargingLocations from './pages/ChargingLocations';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';
// import { useState, useEffect } from "react";
// import { carsLoader } from './apiCalls';
// import logo from './logo.svg';
// import './App.css';

function App() {
  // const [carInfo, setCarInfo] = useState([]);
  // // const [tripInfo, setTripInfo] = useState([]);

  // useEffect(() => {
  //   const fetchCars = async () => {
  //     try {
  //       const data = await carsLoader();
  //       setCarInfo(data);
  //     } catch(err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchCars();
  // }, []);

  // useEffect(() => {
  //   const fetchTrips = async () = {
  //     try {
  //       const data = await tripLoader();
  //       setTripInfo(data);
  //     } catch(err) {
  //       console.log(err);
  //     }
  //   }
  //   fetchTrips();
  // }, []);

  // if (!carInfo) {
  //   return(<h1>Loading...</h1>)
  // }

  return (
    <>
      <header>
        <h1>
          <a href="/">On The Go! EV</a>
        </h1>
      </header>
      <main>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/top-evs-2023' element={<TopEvs />} />
          <Route path='/top-evs-2023/:id' element={<CarDetails />} />
          <Route path='/before-you-go' element={<BeforeYouGo />} />
          <Route path='/trip-planner' element={<TripPlanner />} />
          <Route path='/trip-planner/:id' element={<TripDetails />} />
          <Route path='/charging-locations' element={<ChargingLocations/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
