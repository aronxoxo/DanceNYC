var map = L.map('map', {
  center: [40.7831, -73.9712],
  zoom: 11
});
var Stamen_Toner = new L.StamenTileLayer("toner");
map.addLayer(Stamen_Toner);

var danceNycRaw;
var markersAllOrgs;
