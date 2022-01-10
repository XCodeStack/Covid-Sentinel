import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { Chart } from 'react-google-charts';
import axios from 'axios';
import { vaccinationOptions } from '../utils/constants';
import Loader from './Spinner';
import { useLocation } from 'react-router';
import Table from './Table';
// import { isoOptions } from '../utils/constants';
import useIso from '../utils/useIso';
// import object from '../utils/isoCodes';

const VaccineMap = () => {
  const { state } = useLocation();
  const [ countryData, setCountryData ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  // const [ iso, setIso ] = useState();

  const iso = useIso(state); // Custom Hook api calls for the iso code or defaults to USA

  useEffect(() => {
    console.log('2nd useEffect - this is the iso', iso);
    if (!iso) return;
    vaccinationOptions.params['iso'] = iso;
    axios
      .request(vaccinationOptions)
      .then((response) => response.data)
      .then((data) => {
        const { country, total_vaccinations } = data[data.length-1];
        return { country, total_vaccinations };
      })
      .then((data) => {
        const cache = [ [], [] ];
        for (const property in data) {
          const capitalizedString = `${property[0].toUpperCase()}${property.slice(1)}`;
          const formattedString = capitalizedString.replaceAll(/_/g, ' ');
          cache[0].push(formattedString);
          const dataPoint = Number.isNaN(+data[property]) ? data[property] : +data[property];
          cache[1].push(dataPoint);
        }
        setCountryData(cache);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [iso]);

  const options = {
  };
    

  return (
    <div>
      <h1>Vaccine Map</h1>
      {loading ? <Loader/> :
        <Chart 
          chartType="GeoChart"
          width="100%"
          height="60vh"
          data={countryData}
          options={options}
        />
      }
      {loading ? <Loader/> : 
        <Table iso={iso}/>
      }
    </div>
  );

};

export default VaccineMap;
