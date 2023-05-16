import React from 'react';
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
        <Routes>
          <Route path='/' />
          <Route path='/top-evs-2023' />
          <Route path='/before-you-go' />
          <Route path='/trip-planner' />
          <Route path='/charging-locations' />
          <Route path='/about' />
          <Route path='/contact' />
        </Routes>
      </main>
    </>
  );
}

export default App;
