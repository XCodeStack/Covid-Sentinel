import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Map from './Map';

function Homepage() {
  return (
    <div className="container mx-auto">
      <h1>Hello from Vaccination map (change name to this component)</h1>
      <Map />
    </div>
  );
}

export default Homepage;
