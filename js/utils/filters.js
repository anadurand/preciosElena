'use strict';

const filterByDistrict = (stations,query) => {
  //console.log(stations);
  return stations.filter( (station) => {
    
    return station.producto.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
}
