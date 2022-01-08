import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { Chart } from 'react-google-charts';
import axios from 'axios';
import { vaccinationOptions } from '../utils/constants';
import Loader from './Spinner';
import { useLocation } from 'react-router';
import object from '../utils/isoCodes';

const VaccineMap = (props) => {
  const [ countryData, setCountryData ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  // const { state : { Country } } = useLocation();
  const { state } = useLocation();
  if (!state) {
    console.log('this does not exist')
    vaccinationOptions.params['iso'] = 'USA';
  } else {
    const { Country } = state;
    vaccinationOptions.params['iso'] = object[Country];
  }

  useEffect(() => {
    
    // {country: 'United States', iso_code: 'USA', date: '2021-11-09', total_vaccinations: '433156393.0', people_vaccinated: '224257467.0', …}
    // console.log(response.data[response.data.length-1]);
    //     // response[response.length - 1];
    //     // const { total_vaccinations, people_vaccinated }
    //     // const { total_vaccinations, people_vaccinated } = response.data[response.data.length-1];
    //     return response.data;

    // {
    //     "country": "United States",
    //     "iso_code": "USA",
    //     "date": "2021-11-09",
    //     "total_vaccinations": "433156393.0",
    //     "people_vaccinated": "224257467.0",
    //     "people_fully_vaccinated": "192724988.0",
    //     "daily_vaccinations_raw": "0.0",
    //     "daily_vaccinations": "727325.0",
    //     "total_vaccinations_per_hundred": "128.79",
    //     "people_vaccinated_per_hundred": "66.68",
    //     "people_fully_vaccinated_per_hundred": "57.3",
    //     "daily_vaccinations_per_million": "2163.0",
    //     "vaccines": "Johnson&Johnson, Moderna, Pfizer/BioNTech",
    //     "source_name": "Centers for Disease Control and Prevention",
    //     "source_website": "https://covid.cdc.gov/covid-data-tracker/#vaccination-trends"
    // }
    axios
      .request(vaccinationOptions)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        const { country, total_vaccinations } = data[data.length-1];
        return { country, total_vaccinations };
      })
      .then((data) => {
        console.log(data);
        // const cache = [['Country', 'People Vaccinated'], [data.country, +data.people_vaccinated]];
        const cache = [ [], [] ];
        for (const property in data) {
          const capitalizedString = `${property[0].toUpperCase()}${property.slice(1)}`;
          const formattedString = capitalizedString.replaceAll(/_/g, ' ');
          console.log(formattedString);
          cache[0].push(formattedString);
          const dataPoint = Number.isNaN(+data[property]) ? data[property] : +data[property];
          cache[1].push(dataPoint);
        }
        // cache[1][1] = `${capitalizedString}: ${data[property]}`;
        console.log('this is the cache', cache);
        setCountryData(cache);
        setLoading(false);
      })
    //   .then((response) => {
    //   })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const options = {
    // region: '151', // Russia
    // displayMode: 'text',
    // legendToggle: true,
    // title: 'USA',
  };
    

  return (
    <div>
      <h1>Vaccine Map</h1>
      {loading ? <Loader/> :
      <Chart 
        // chartEvents={[
        //   {
        //     eventName: "select",
        //     callback: ({ chartWrapper }) => {
        //       const chart = chartWrapper.getChart();
        //       const selection = chart.getSelection();
        //       if (selection.length === 0) return;
        //       const region = data[selection[0].row + 1];
        //       console.log("Selected : " + region);
        //     },
        //   },
        // ]}
        chartType="GeoChart"
        width="100%"
        height="400px"
        data={countryData}
        options={options}
      />
      }
    </div>
  );

};

export default VaccineMap;
