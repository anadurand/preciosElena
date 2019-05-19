'use strict';

const filterByDistrict = (stations,query) => {
  return stations.filter( (station) => {
    return station.producto.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
}
