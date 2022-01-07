import React from 'react';
import { render } from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './components/App';
import About from './components/About';
import Map from './components/Map';
import Countries from './components/Countries';
import Homepage from './components/Homepage';
import Styles from './stylesheets/styles.css';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="map" element={<Map />} />
        <Route path="countries" element={<Countries />} />
      </Route>
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);
