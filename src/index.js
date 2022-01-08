import React from 'react';
import { render } from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './components/App';
import About from './components/About';
import VaccineMap from './components/VaccineMap';
import CovidMap from './components/CovidMap';
import Hero from './components/Hero';
import Styles from './stylesheets/styles.css';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Hero />} />
        <Route path="home" element={<Hero />} />
        <Route path="country" element={<VaccineMap />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);
