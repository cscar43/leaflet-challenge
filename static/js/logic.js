// Initialize map and set the center and zoom level
let myMap = L.map("map", {
    center: [44.09, -95.71],
    zoom: 4
  });
  
  // Add tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
  }).addTo(myMap);

// Fetch GeoJSON data
d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson')
  .then(function (data) {
    // Process the data
    var earthquakes = data.features;

    // Iterate over earthquake data
    earthquakes.forEach(function (earthquake) {
      let magnitude = earthquake.properties.mag;
      let depth = earthquake.geometry.coordinates[2];
      let latitude = earthquake.geometry.coordinates[1];
      let longitude = earthquake.geometry.coordinates[0];

      // Define marker size and color based on magnitude and depth
      let markerSize = magnitude * 4;
      let markerColor = getColorForDepth(depth);

      // Create marker and bind popup
      let marker = L.circleMarker([latitude, longitude], {
        radius: markerSize,
        fillColor: markerColor,
        color: '#000',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      }).addTo(myMap);

      marker.bindPopup('Magnitude: ' + magnitude + '<br>Depth: ' + depth);
    });

    // Create a legend control
    let legend = L.control({ position: 'bottomright' });

    legend.onAdd = function (myMap) {
      let div = L.DomUtil.create('div', 'legend');
        div.innerHTML += '<h4>Depth Legend</h4>';
        div.innerHTML += '<div class="legend-item"><span class="legend-color" style="background: #008000"></span> -10 - 10</div>';
        div.innerHTML += '<div class="legend-item"><span class="legend-color" style="background: #FFFF00"></span> 10 - 30</div>';
        div.innerHTML += '<div class="legend-item"><span class="legend-color" style="background: #FFD700"></span> 30 - 50</div>';
        div.innerHTML += '<div class="legend-item"><span class="legend-color" style="background: #FFA500"></span> 50 - 70</div>';
        div.innerHTML += '<div class="legend-item"><span class="legend-color" style="background: #FF4500"></span> 70 - 90</div>';
        div.innerHTML += '<div class="legend-item"><span class="legend-color" style="background: #FF0000"></span> 90+</div>';
        return div;
      };   
      
      legend.addTo(myMap);
    }); 

// Define color scale function based on depth
function getColorForDepth(depth) {
    if (depth > -10 && depth < 10) {
      return '#008000'; // Green
    } else if (depth >= 10 && depth < 30) {
      return '#FFFF00'; // Yellow
    } else if (depth >= 30 && depth < 50) {
      return '#FFD700'; // Yellow-Orange
    } else if (depth >= 50 && depth < 70) {
      return '#FFA500'; // Orange
    } else if (depth >= 70 && depth < 90) {
      return '#FF4500'; // Orange-Red
    } else {
      return '#FF0000'; // Red
    }
  }
