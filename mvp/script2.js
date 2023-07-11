const app = {
  init: () => {
    // Initialize the app by attaching event listeners to buttons
    document
      .getElementById('btnGet')
      .addEventListener('click', app.fetchWeather); // Event listener for fetching weather
    document
      .getElementById('btnCurrent')
      .addEventListener('click', app.getLocation); // Event listener for getting current location
  },
  fetchWeather: (ev) => {
    // Fetch weather data using the provided latitude and longitude
    let lat = document.getElementById('latitude').value;
    let lon = document.getElementById('longitude').value;
    let key = '06cc7efd0e5386068ec3c390bcfd0183'; // API key for OpenWeatherMap
    let lang = 'en'; // Language for weather information
    let units = 'metric'; // Units for temperature
    let url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;

    // Fetch the weather data
    fetch(url)
      .then((resp) => {
        if (!resp.ok) throw new Error(resp.statusText);
        return resp.json();
      })
      .then((data) => {
        app.showWeather(data); // Display the weather data
      })
      .catch(console.err);
  },
  getLocation: (ev) => {
    // Get the current location coordinates using geolocation API
    let opts = {
      enableHighAccuracy: true,
      timeout: 1000 * 10, // 10 seconds
      maximumAge: 1000 * 60 * 5, // 5 minutes
    };
    navigator.geolocation.getCurrentPosition(app.ftw, app.wtf, opts);
  },
  ftw: (position) => {
    // Successfully obtained the position coordinates
    document.getElementById('latitude').value =
      position.coords.latitude.toFixed(2); // Display latitude in input field
    document.getElementById('longitude').value =
      position.coords.longitude.toFixed(2); // Display longitude in input field
  },
  wtf: (err) => {
    // Geolocation failed
    console.error(err);
  },
  showWeather: (resp) => {
    console.log(resp);
    let row = document.querySelector('.weather.row');
    // Clear out the old weather data and display the new data
    row.innerHTML = resp.daily
      .map((day, idx) => {
        if (idx <= 2) {
          let dt = new Date(day.dt * 1000); // Convert timestamp to date object
          let sr = new Date(day.sunrise * 1000).toTimeString(); // Convert sunrise timestamp to time string
          let ss = new Date(day.sunset * 1000).toTimeString(); // Convert sunset timestamp to time string
          return `<div class="col">
              <div class="card">
              <h5 class="card-title p-2">${dt.toDateString()}</h5>
                <img
                  src="http://openweathermap.org/img/wn/${
                    day.weather[0].icon
                  }@4x.png"
                  class="card-img-top"
                  alt="${day.weather[0].description}"
                />
                <div class="card-body">
                  <h3 class="card-title">${day.weather[0].main}</h3>
                  <p class="card-text">High ${day.temp.max}&deg;C Low ${
            day.temp.min
          }&deg;C</p>
                  <p class="card-text">High Feels like ${
                    day.feels_like.day
                  }&deg;C</p>
                  <p class="card-text">Pressure ${day.pressure}mb</p>
                  <p class="card-text">Humidity ${day.humidity}%</p>
                  <p class="card-text">UV Index ${day.uvi}</p>
                  <p class="card-text">Precipitation ${day.pop * 100}%</p>
                  <p class="card-text">Dewpoint ${day.dew_point}</p>
                  <p class="card-text">Wind ${day.wind_speed}m/s, ${
            day.wind_deg
          }&deg;</p>
                  <p class="card-text">Sunrise ${sr}</p>
                  <p class="card-text">Sunset ${ss}</p>
                </div>
              </div>
            </div>
          </div>`;
        }
      })
      .join(' ');
  },
};

app.init(); // Initialize the app
