'use strict';
const stationDetail = (update) => {
  const parent = $('<div class="station-detail"></div>');
  const h2 = $('<h2 class="name-station">'+ state.selectedStation.producto + '</h2>');
  const hr = $('<hr>');
  const pAddress = $('<p class="direccion">Unidad:' + state.selectedStation.Unidad + '</p>');
  const pDecena = $('<p class="direccion">Denena:' + state.selectedStation.Decena + '</p>');
  const pDocena = $('<p class="direccion">Docena:' + state.selectedStation.Docena + '</p>');
  const pCiento = $('<p class="direccion">Ciento:' + state.selectedStation.Ciento + '</p>');
  //const pGruesa = $('<p class="direccion">Gruesa:' + state.selectedStation.Gruesa + '</p>');
  //const pMillar = $('<p class="direccion">Millar:' + state.selectedStation.Millar + '</p>');
  const pCaja = $('<p class="direccion">Caja:' + state.selectedStation.Caja + '</p>');


  
  parent.append(h2);
  parent.append(hr);
  parent.append(pAddress);
  parent.append(pDecena);
  parent.append(pDocena);
  parent.append(pCiento);
  //parent.append(pGruesa);
  //parent.append(pMillar);
  parent.append(pCaja);
  return parent;
}
