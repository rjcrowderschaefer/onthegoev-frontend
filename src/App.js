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
import TripNew from './pages/TripNew';
import TripEdit from './pages/TripEdit';
import TripDelete from './pages/TripDelete';
import ChargingLocations from './pages/ChargingLocations';
import Contact from './pages/Contact';
import ContactConfirmation from './pages/ContactConfirmation';
import { Route, Routes } from 'react-router-dom';
// import { useState, useEffect } from "react";
// import { carsLoader } from './apiCalls';
// import logo from './logo.svg';
// import './App.css';

function App() {

  return (
    <>
      {/* <header>
        <h1>
          <a href="/">On The Go! EV</a>
        </h1>
      </header> */}
      <main>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/top-evs-2023' element={<TopEvs />} />
          <Route path='/top-evs-2023/:id' element={<CarDetails />} />
          <Route path='/before-you-go' element={<BeforeYouGo />} />
          <Route path='/trip-planner'>
            <Route path='' element={<TripPlanner />} />
            <Route path='new' element={<TripNew />} />
            <Route path=':id'>
              <Route path='' element={<TripDetails />} />
              <Route path='edit' element={<TripEdit />} />
              <Route path='delete' element={<TripDelete />} />
            </Route>
          </Route>
          <Route path='/charging-locations' element={<ChargingLocations/>} />
          <Route path='/about' element={<About />} />
          <Route path='/contact'>
            <Route path='' element={<Contact/>} />
            <Route path='thank-you' element={<ContactConfirmation/>} />
          </Route>
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
