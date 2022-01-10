import { useState, useEffect } from 'react';
import axios from 'axios';
import { isoOptions } from './constants';

function useIso(state) {

  const [ iso, setIso ] = useState();

  useEffect(() => {
    if (!state) {
      setIso('USA');
      return;
    }
    axios.request(isoOptions)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        return data.reduce(
          (obj, item) => Object.assign(obj, { [item.Country]: item.ThreeLetterSymbol.toUpperCase() }), {});
      })
      .then((data) => {
        console.log('1st useEffect - returned iso fetch', data[state['Country']]);
        setIso(data[state['Country']]);
      })
      .catch((error) => console.log(error));
  }, []);

  return iso;
}

// function useIso(state, setFetchingIso) {
//   const getIso = function () {
//     if (!state) return 'USA';
    
//     return axios.request(isoOptions)
//       .then((response) => response.data)
//       .then((data) => {
//         console.log(data);
//         return data.reduce(
//           (obj, item) => Object.assign(obj, { [item.Country]: item.ThreeLetterSymbol.toUpperCase() }), {});
//       })
//       .then((data) => data[state])
//       .catch((error) => console.log(error));
            
//   };
        
//   const [ iso, setIso ] = useState(getIso());

//   return [ iso, setIso ];
// }

export default useIso;