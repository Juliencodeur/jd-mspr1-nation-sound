document.addEventListener("DOMContentLoaded", function () {
  // Initialize the map and set initial view to focus on the entry point
  var map = L.map("map").setView([48.85904, 2.23224], 16);  // Center on Entrée

  // Add tile layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Function to create a custom DivIcon with a label below the icon
  function createLabelIcon(label, iconUrl) {
    return L.divIcon({
      html: `<div class="icon-label-container">
                <img src="${iconUrl}">
                <div class="icon-label-text">${label}</div>
             </div>`,
      className: "", 
    });
  }
  
  // Define custom icons with labels for each category
  var icons = {
    Entrée: "https://img.icons8.com/color/48/login-rounded-right.png",
    Billetterie: "https://img.icons8.com/color/48/ticket.png",
    Informations: "https://img.icons8.com/color/48/information.png",
    Scènes: "https://img.icons8.com/fluency/48/music-festival.png",
    Secours: "https://img.icons8.com/color/48/doctors-bag.png",
    Toilettes: "https://img.icons8.com/color/48/toilet.png",
    Snacks: "https://img.icons8.com/color/48/french-fries.png",
    Restaurant: "https://img.icons8.com/color/48/restaurant.png",
    Buvettes: "https://img.icons8.com/color/48/bar-counter.png",
    "Stands souvenirs": "https://img.icons8.com/color/48/gift.png",
    Camping: "https://img.icons8.com/color/48/campsite.png",
  };

  // Create a layer group for each category
  var categories = {};
  Object.keys(icons).forEach(function (category) {
    categories[category] = L.layerGroup();
  });

  // Function to add markers for each category with coordinates and popups
  function addMarkers(category, details) {
    details.forEach(function (detail) {
      var iconLabel = detail.iconLabel || category;
      var iconUrl = icons[category]; // Use the icon URL defined in icons
      L.marker([detail.lat, detail.lng], {
        icon: createLabelIcon(iconLabel, iconUrl),
      })
        .bindPopup(detail.name)
        .addTo(categories[category]); 
    });
  }

  // Coordinates and names for each category
  addMarkers("Billetterie", [
    { lat: 48.859, lng: 2.2326, name: "Billetterie" },
  ]);
  addMarkers("Snacks", [
    {
      lat: 48.85682,
      lng: 2.23154,
      name: "Snacks <br> Ouvert de 12:00 à 22:30",
    },
    {
      lat: 48.86056,
      lng: 2.23392,
      name: "Snacks <br> Ouvert de 12:00 à 22:30",
    },
    {
      lat: 48.85852,
      lng: 2.23375,
      name: "Snacks <br> Ouvert de 12:00 à 22:30",
    },
    {
      lat: 48.85616,
      lng: 2.23433,
      name: "Snacks <br> Ouvert de 12:00 à 22:30",
    },
    { lat: 48.8531, lng: 2.23584, name: "Snacks <br> Ouvert de 12:00 à 22:30" },
    {
      lat: 48.85561,
      lng: 2.23652,
      name: "Snacks <br> Ouvert de 12:00 à 22:30",
    },
  ]);
  addMarkers("Buvettes", [
    {
      lat: 48.85828,
      lng: 2.23362,
      name: "Buvettes <br> Ouvert de 12:00 à 22:30",
    },
    {
      lat: 48.86018,
      lng: 2.23397,
      name: "Buvettes <br> Ouvert de 12:00 à 22:30",
    },
    {
      lat: 48.85827,
      lng: 2.23518,
      name: "Buvettes <br> Ouvert de 12:00 à 22:30",
    },
    {
      lat: 48.8554,
      lng: 2.23376,
      name: "Buvettes <br> Ouvert de 12:00 à 22:30",
    },
    {
      lat: 48.85423,
      lng: 2.23569,
      name: "Buvettes <br> Ouvert de 12:00 à 22:30",
    },
  ]);
  addMarkers("Informations", [
    { lat: 48.86004, lng: 2.23328, name: "Informations" },
    { lat: 48.8586, lng: 2.23448, name: "Informations" },
  ]);
  addMarkers("Camping", [
    {
      lat: 48.85497,
      lng: 2.23815,
      name: "Camping <br>Pensez à vous enregistrer <br>AVANT la fin des concerts",
    },
  ]);
  addMarkers("Restaurant", [
    { lat: 48.85837, lng: 2.23255, name: "Restaurant" },
  ]);
  addMarkers("Scènes", [
    {
      lat: 48.86166,
      lng: 2.23468,
      name: 'Starlight Stage <br>Retrouvez la liste des artistes <br><a href="../../html/pages/lieux.html">ici</a>',
      iconLabel: "Starlight Stage",
    },
    {
      lat: 48.85518,
      lng: 2.23233,
      name: 'Sunset Pavilion <br>Retrouvez la liste des artistes <br><a href="../../html/pages/lieux.html">ici</a>',
      iconLabel: "Sunset Pavilion",
    },
    {
      lat: 48.85695,
      lng: 2.23607,
      name: 'Texane Sunset <br>Retrouvez la liste des artistes <br><a href="../../html/pages/lieux.html">ici</a>',
      iconLabel: "Texane Sunset",
    },
    {
      lat: 48.85437,
      lng: 2.23658,
      name: 'Harmony Plaza <br>Retrouvez la liste des artistes <br><a href="../../html/pages/lieux.html">ici</a>',
      iconLabel: "Harmony Plaza",
    },
    {
      lat: 48.85363,
      lng: 2.23337,
      name: 'Moonlit Arena <br>Retrouvez la liste des artistes <br><a href="../../html/pages/lieux.html">ici</a>',
      iconLabel: "Moonlit Arena",
    },
  ]);
  addMarkers("Toilettes", [
    { lat: 48.86159, lng: 2.23565, name: "Toilettes" },
    { lat: 48.85989, lng: 2.23589, name: "Toilettes" },
    { lat: 48.85891, lng: 2.23543, name: "Toilettes" },
    { lat: 48.85759, lng: 2.2349, name: "Toilettes" },
    { lat: 48.85359, lng: 2.23395, name: "Toilettes" },
    { lat: 48.85257, lng: 2.23348, name: "Toilettes" },
  ]);
  addMarkers("Entrée", [
    { lat: 48.85904, lng: 2.23224, name: "Main Entrance" },
  ]);
  addMarkers("Stands souvenirs", [
    {
      lat: 48.85809,
      lng: 2.23412,
      name: "Souvenirs <br>Ouvert de 14:00 à 22:30",
    },
    {
      lat: 48.85954,
      lng: 2.23389,
      name: "Souvenirs <br>Ouvert de 14:00 à 22:30",
    },
  ]);
  addMarkers("Secours", [
    { lat: 48.85829, lng: 2.23309, name: "Secours" },
    { lat: 48.85873, lng: 2.23499, name: "Secours" },
    { lat: 48.85497, lng: 2.23223, name: "Secours" },
    { lat: 48.85526, lng: 2.23667, name: "Secours" },
  ]);

  // Add only the "Entrée" layer to the map initially
  categories["Entrée"].addTo(map);

  // Function to recenter the map on markers of a specific category
  function recenterMapOnCategory(category) {
    var bounds = L.latLngBounds([]);
    categories[category].eachLayer(function (layer) {
      bounds.extend(layer.getLatLng());
    });
    if (bounds.isValid()) {
      map.fitBounds(bounds);
    }
  }

  // Filtering logic
  document
    .getElementById("categoryFilter")
    .addEventListener("change", function () {
      var selectedCategory = this.value;
      if (selectedCategory === "geolocalisation") {
        map.locate({ setView: true, maxZoom: 16 });
      } else {
        Object.keys(categories).forEach(function (category) {
          if (selectedCategory === "all" || category === selectedCategory) {
            map.addLayer(categories[category]);
            if (selectedCategory !== "all") {
              recenterMapOnCategory(selectedCategory); // Recenter the map on the selected category
            }
          } else {
            map.removeLayer(categories[category]);
          }
        });
      }
    });

  // Handle location found event
  map.on("locationfound", function (e) {
    var radius = e.accuracy / 2;
    L.marker(e.latlng)
      .addTo(map)
      .bindPopup("Vous êtes dans un rayon de " + radius + " mètres de ce point")
      .openPopup();
    L.circle(e.latlng, radius).addTo(map);
  });

  // Handle location error event
  map.on("locationerror", function () {
    alert("La localisation a échoué.");
  });

  // Event listener to toggle fullscreen
  document.getElementById("map").addEventListener("click", function () {
    console.log("Carte cliquée!");
    this.classList.toggle("fullscreen-map");

    // Force recalculating the map size after transition to fullscreen
    setTimeout(function () {
      map.invalidateSize();
    }, 300); // Small delay to ensure the container has resized
  });
});
