import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import NavBar from './Navbar';
import Homepage from './Homepage';
import Countries from './Countries';
import About from './About';
import Map from './Map';
import Loader from './Spinner';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <div>
        <h1>Hello from App</h1>
        <NavBar />
      </div>
    </div>
  );
};

export default App;
