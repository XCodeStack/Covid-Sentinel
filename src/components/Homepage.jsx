import React from 'react';
import MapComponent from './Map-Component';

const Homepage = () => {
    return (
        <div className='container mx-auto'>
        <h1 className='text-blue-900 font-bold'>Welcome to Covid Sentinel!</h1>
        <MapComponent />
        </div>
    )
}

export default Homepage;
