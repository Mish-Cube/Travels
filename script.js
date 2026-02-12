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
  iconUrl: 'icon.png',  
  iconSize: [32, 32],     
  iconAnchor: [16, 32],      
  popupAnchor: [0, -32]      
});


var locations = [
  {
    name: "London[2024-2025]",
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
    text: "'London, that great cesspool into which all the loungers and idlers of the Empire are irresistibly drained.' –Sir Arthur Conan Doyle"
  },

  {
    name: "Cambridge [2022-2025]",
    coords: [52.20225, 0.13144],
    photos: [
      "cambridge1.jpeg",
      "cambridge2.png"
    ],
    audio: "cambridgevoice.mp3",
    text: "'Cambridge was a joy. Tediously. People reading books in a posh place. It was my fantasy. I loved it. I miss it still.' –Zadie Smith"
  },

  {
    name: "Christchurch [2022]",
    coords: [-43.56180, 172.71538],
    photos: [
      "chch1.jpg",
      "chch2.jpg",
      "chch3.jpg",
      "chch4.jpg",
      "chch5.jpg"
    ],
    audio: "chchvoice.mp3",
    text: "'Every time I go to Christchurch I leave slightly confused. Then I realise why: the people are happy, they are spending money, the place is growing and going forward.' - Pattie Gower"
  },

  {
    name: "Huntington [2024]",
    coords: [40.87841, -73.42409],
    photos: [
      "hunt1.jpeg",
      "hunt2.png",
      "hunt3.jpeg",
      "hunt4.jpeg",
      "hunt5.jpeg",
      "hunt6.jpeg",
      "hunt7.jpeg",
      "hunt8.jpg",
      "hunt9.jpg",
      "hunt10.jpeg",
      "hunt11.jpeg"
    ],
    audio: "huntvoice.mp3",
    text: "'There's a certain type of character that you can't help but come in contact with growing up and living in Brooklyn and Long Island. A certain mixture of moxie, heart, and a wise guy sense of humor.' - Steve Buscemi"
  },

  {
    name: "India [2025]",
    coords: [18.51926, 73.85542],
    photos: [
      "india1.jpg",
      "india2.jpg",
      "india3.jpg",
      "india4.jpg",
      "india5.jpg",
      "india6.jpg"
    ],
    audio: "indiavoice.mp3",
    text: "'To other countries, I may go as a tourist, but to India, I come as a pilgrim.' - Martin Luther King, Jr."
  },

  {
    name: "Nelson [2022]",
    coords: [-40.85477, 173.00643],
    photos: [
      "nelson1.jpg",
      "nelson2.jpg",
      "nelson3.jpg",
      "nelson4.jpg"
    ],
    audio: "nelsonvoice.mp3",
    text: "'Amazing. Beautiful. Nothing else.' - Enrico Adler, Local Guide."
  },

  {
    name: "North Island [2022]",
    coords: [-39.06308, 175.57243],
    photos: [
      "north1.jpg",
      "north2.jpg",
      "north3.jpg",
      "north4.jpg"
    ],
    audio: "northvoice.mp3",
    text: "'As they neared the brothers were seen still chopping and arguing over which part of the fish was theirs. The people saw them for the greedy brothers that they were. They were so greedy that they had chopped huge gullies and mountains from the fish's flesh. Over many hundreds and thousands of years, these gullies and mountains became part of the landscape of Aotearoa as we know it today. Birds, plants, animals and the people of Hawaiki populated the giant fish of Māui. And in time Māui's giant fish became known as the North Island of Aotearoa.' - Legend"
  },

  {
    name: "Queens [2025-2026]",
    coords: [40.71965, -73.84976],
    photos: [
      "queen1.jpeg",
      "queen2.jpg",
      "queen3.jpeg",
      "queen4.jpg",
      "queen5.jpeg",
      "queen6.jpeg",
      "queen7.jpg",
      "queen8.jpg",
      "queen9.jpeg",
      "queen10.jpeg",
      "queen11.jpeg"
    ],
    audio: "queenvoice.mp3",
    text: "'I'm just a nerdy kid from Queens. Do I deserve this?' - Spider Man"
  },

  {
    name: "Slough [2022-2025]",
    coords: [51.51804, -0.61356],
    photos: [
      "slough1.jpeg"
    ],
    audio: "sloughvoice.mp3",
    text: "'My Kind of Town.' - David Brent"
  },

  {
    name: "South [2025-2026]",
    coords: [-43.62973, 169.94616],
    photos: [
      "south1.jpg",
      "south2.jpg",
      "south3.jpg",
      "south4.jpg",
      "south5.jpg",
      "south6.jpg",
      "south7.jpg",
      "south8.jpg"
    ],
    audio: "southvoice.mp3",
    text: "'How to turn and wonder at the starlight that glittered through the years on untouched ice, the face of mountains, on lakes of clear, clean water?' - Rangi Faith"
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
