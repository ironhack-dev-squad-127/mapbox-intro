mapboxgl.accessToken = 'pk.eyJ1IjoibWMxMDBzIiwiYSI6ImNqb2E2ZTF3ODBxa3czd2xldHp1Z2FxbGYifQ.U4oatm5RsTXXHQLz5w66dQ';

// Embed a map in a tag with the id `map`
var map = new mapboxgl.Map({
  container: 'map', 
  style: 'mapbox://styles/mc100s/cjul2wsyr1op21fnwwjqesedt',
  center: [-9.1527307,38.7109469], // starting position
  zoom: 10 // starting zoom
})

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

var marker = new mapboxgl.Marker({
  draggable: true,
  color: 'red'
})
  .setLngLat([-9.1527307,38.7109469])
  .addTo(map);


var parisMarker = new mapboxgl.Marker({
  draggable: true,
  color: 'red'
})
  .setLngLat([2.3375929,48.8744254])
  .addTo(map)


axios.get('https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=31914cb97e2074dd91b0b77c5e6e62d8ea0587f9')
  .then(response => {
    for (let i = 0; i < response.data.length; i++) {
      const curPosition = response.data[i].position
      const percentage = response.data[i].available_bikes / response.data[i].bike_stands
      console.log(i, curPosition, percentage)
      new mapboxgl.Marker({
        color: `rgb(255, ${255*percentage}, ${255*percentage})`
      })
        .setLngLat([curPosition.lng,curPosition.lat])
        .addTo(map)
    }
  })