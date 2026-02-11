var map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg', {
  attribution: 'Map tiles by Stamen Design, CC BY 3.0 — Map data © OpenStreetMap',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 18,
  noWrap: true
}).addTo(map);

// Example location
var london = `
<h2>London</h2>
<p>The truth is, that in London it is always a sickly season. Nobody is healthy in London, nobody can be. –Jane Austen</p>

<img src="london1.jpg">
<img src="london2.jpg">
<img src="london3.jpg">

<audio controls>
  <source src="londonvoice.mp3" type="audio/mpeg">
</audio>
`;

L.marker([51.5074, -0.1278]).addTo(map).bindPopup(london);
