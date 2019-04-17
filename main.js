
mapboxgl.accessToken = 'pk.eyJ1IjoibWMxMDBzIiwiYSI6ImNqb2E2ZTF3ODBxa3czd2xldHp1Z2FxbGYifQ.U4oatm5RsTXXHQLz5w66dQ';

// Embed a map in a tag with the id `map`
var map = new mapboxgl.Map({
  container: 'map', 
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-74.50, 40], // starting position
  zoom: 9 // starting zoom
})

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());
