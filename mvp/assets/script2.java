const layer = "precipitation_new"; // Specify the desired layer (e.g., precipitation_new)
const zoom = 10; // Specify the zoom level
const x = 5; //   x coordinate
const y = 10; // S  y coordinate
const apiKey = "1b2d49905d355c1415216e01a1f35ee3"; //   OpenWeatherMap API key

const tileUrl = `https://tile.openweathermap.org/map/${layer}/{z}/{x}/{y}.png?appid=${apiKey}`;

fetch(tileUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch tile image.");
    }
    return response.blob();
  })
  .then((blob) => {
    const url = URL.createObjectURL(blob);
    console.log("Tile image URL:", url);
    // Use the tile image URL as needed (e.g., set as the source of an <img> tag)
  })
  .catch((error) => {
    console.error(error);
  });
