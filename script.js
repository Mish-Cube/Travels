var map = L.map('map', {
  center: [20, 0], 
  zoom: 2,     
  minZoom: 2,     
  maxZoom: 18,    
  worldCopyJump: true 
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

var cameraIcon = L.icon({
  iconUrl: 'icons.jpg',  
  iconSize: [32, 32],     
  iconAnchor: [16, 32],      
  popupAnchor: [0, -32]      
});


var london = `
<h2>London</h2>
<p>London, that great cesspool into which all the loungers and idlers of the Empire are irresistibly drained. –Sir Arthur Conan Doyle</p>

<div class="popup-gallery">
    <img src="london1.jpg">
    <img src="london2.jpg">
    <img src="london3.jpg">
    <img src="london4.jpeg">
    <img src="london5.jpeg">
    <img src="london6.png">
    <img src="london7.jpg">
    <img src="london8.jpg">
</div>

<audio controls>
  <source src="londonvoice.mp3" type="audio/mpeg">
</audio>
`;

L.marker([51.5074, -0.1278]).addTo(map).bindPopup(london);
