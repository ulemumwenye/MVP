let weather = {
  apiKey: "1b2d49905d355c1415216e01a1f35ee3",
  fetchWeather: function (city) {
    // Fetch weather data for the specified city
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data)); // Display the weather data
  },
  displayWeather: function (data) {
    // Display the weather information on the webpage
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";

    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    // Perform a weather search based on the value in the search bar
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

// Event listener for search button click
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

// Event listener for Enter key press in the search bar
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

// Fetch weather data for Blantyre by default
weather.fetchWeather("Blantyre");
