var map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Example location
var london = `
<h2>London</h2>
<p>The truth is, that in London it is always a sickly season. Nobody is healthy in London, nobody can be. –Jane Austen</p>

<img src="london1.jpg">
<img src="london2.jpg">

<audio controls>
  <source src="londonvoice.mp3" type="audio/mpeg">
</audio>
`;

L.marker([51.5074, -0.1278]).addTo(map).bindPopup(london);
