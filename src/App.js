import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import TopEvs from './pages/TopEvs';
import CarDetails from './pages/CarDetails';
import BeforeYouGo from './pages/BeforeYouGo';
import TripPlanner from './pages/TripPlanner';
import ChargingLocations from './pages/ChargingLocations';
import Contact from './pages/Contact';
import { Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';

function App() {
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
          <Route path='/trip-planner' element={<TripPlanner/>} />
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
