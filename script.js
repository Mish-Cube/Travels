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


var locations = [
  {
    name: "London",
    coords: [51.5074, -0.1278],
    photos: [
      "london1.jpg",
      "london2.jpg",
      "london3.jpg",
      "london4.jpeg",
      "london5.jpeg",
      "london6.png",
      "london7.jpg",
      "london8.jpg"
    ],
    audio: "londonvoice.mp3",
    text: "London, that great cesspool into which all the loungers and idlers of the Empire are irresistibly drained. –Sir Arthur Conan Doyle"
  },

  {
    name: "Cambridge",
    coords: [52.20225, 0.13144],
    photos: [
      "cambridge1.jpeg",
      "cambridge2.png"
    ],
    audio: "cambridgevoice.mp3",
    text: "Cambridge was a joy. Tediously. People reading books in a posh place. It was my fantasy. I loved it. I miss it still. –Zadie Smith"
  }


  ];



locations.forEach((loc, i) => {
  var popupHTML = `
    <h2>${loc.name}</h2>
    <p>${loc.text}</p>

    <div class="popup-slider" data-id="${i}">
      <button class="prev">&#10094;</button>
      <img src="${loc.photos[0]}">
      <button class="next">&#10095;</button>
    </div>

    <audio controls>
      <source src="${loc.audio}">
    </audio>
  `;

  L.marker(loc.coords, {icon:cameraIcon}).addTo(map).bindPopup(popupHTML, {
    maxWidth: 900,
    minWidth: 600,
    className: "custom-popup"
  });
});



map.on("popupopen", function(e) {
  var popup = e.popup.getElement();
  if (!popup) return;

  var slider = popup.querySelector(".popup-slider");
  if (!slider) return;

  var id = slider.dataset.id;
  var img = slider.querySelector("img");
  var prev = slider.querySelector(".prev");
  var next = slider.querySelector(".next");

  var photos = locations[id].photos;
  var index = 0;

  prev.onclick = function() {
    index = (index - 1 + photos.length) % photos.length;
    img.src = photos[index];
  };

  next.onclick = function() {
    index = (index + 1) % photos.length;
    img.src = photos[index];
  };
});
