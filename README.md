# Earthquake Visualization

This project is a web-based visualization of earthquake data using Leaflet, D3, and GeoJSON. It displays earthquake locations on a map, with markers representing the magnitude and color representing the depth of each earthquake. Popups provide additional information about each earthquake when clicked.

## Features

- Interactive map showing earthquake locations.
- Marker size reflects the magnitude of earthquakes.
- Marker color represents the depth of earthquakes.
- Popups display information about each earthquake, including magnitude, depth, place, and time.
- Legend provides a visual guide to interpreting marker colors and their corresponding depth ranges.

## Technologies Used

- Leaflet: Used for creating and displaying the interactive map.
- D3: Used for manipulating and visualizing data.
- GeoJSON: Used as the data source for earthquake locations.
- JavaScript: Programming language used for scripting the functionality.
- HTML: Structure and layout of the web page.
- CSS: Styling and customization of the web page.

## Usage

1. Clone or download the project repository.
2. Open the `index.html` file in a web browser.
3. The map will be displayed, showing earthquake locations.
4. Click on any earthquake marker to view additional information in a popup.
5. Refer to the legend for interpreting the marker colors and their corresponding depth ranges.

## Customization

- You can modify the GeoJSON data source to use a different earthquake dataset.
- Adjust the marker size and color scales to match your preferences or specific data ranges.
- Customize the styling and appearance of the map, markers, popups, and legend by modifying the CSS file (`style.css`).

## Legend Color Codes and Symbols

- Green: > -10 - < 10
- Yellow: > 10 - < 30
- Yellow-Orange: > 30 - < 50
- Orange: > 50 - < 70
- Orange-Red: > 70 - < 90
- Red: > 90

## Credits

This project was developed using the Leaflet library and the earthquake data provided by the U.S. Geological Survey (USGS) API.
