var map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
    noWrap: true
}).addTo(map);
map.setMaxBounds([
  [-85, -180], // Southwest corner
  [85, 180]    // Northeast corner
]);

// Example location
var london = `
<h2>London</h2>
<p>The truth is, that in London it is always a sickly season. Nobody is healthy in London, nobody can be. –Jane Austen</p>

<img src="london1.jpg">
<img src="london2.jpg">
<img src="london3.jpg">
<img src="london4.jpg">
<img src="london5.jpg">
<img src="london6.jpg">
<img src="london7.jpg">
<img src="london8.jpg">

<audio controls>
  <source src="londonvoice.mp3" type="audio/mpeg">
</audio>
`;

L.marker([51.5074, -0.1278]).addTo(map).bindPopup(london);
