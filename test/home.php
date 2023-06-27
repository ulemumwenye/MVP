<?php
session_start();
if (isset($_SESSION["username"])) {
    $username = $_SESSION["username"];
    session_write_close();
} else {
    // since the username is not set in session, the user is not-logged-in
    // he is trying to access this page unauthorized
    // so let's clear all session variables and redirect him to index
    session_unset();
    session_write_close();
    $url = "./index.php";
    header("Location: $url");
}

?>
<HTML>
<HEAD>
 <title>WeatherApp - Profile</title>
<link href="assets/css/phppot-style.css" type="text/css"
	rel="stylesheet" />
<link href="assets/css/user-registration.css" type="text/css"
	rel="stylesheet" />
</HEAD>
<BODY>



<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <header>
    <h1>WeatherApp</h1>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="forecast.html">Forecast</a></li>
        <li><a href="profile.html">Profile</a></li>
        <li><a href="favorites.html">Favorites</a></li>
        <li><a href="search.html">Search</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>
      <h2>Profile</h2>
      <!-- Add profile information and edit form here -->
	  
	  <div class="page-content">Welcome <?php echo $username;?></div>
	  
    </section>
	<section>
      <h2>About WeatherApp</h2>
      <p>WeatherApp is a user-friendly weather application that provides accurate and up-to-date weather information for your location.</p>
    </section>
     
   
  <p>Enter your location below to get the current weather conditions and forecast:</p>
    <div class="card">
    <div class="search">
      <input type="text" class="search-bar" placeholder="Search">
      <button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em"
          width="1.5em" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
          </path>
        </svg></button>
    </div>
    <div class="weather loading">
      <h2 class="city">Weather in Blantyre</h2>
      <h1 class="temp">51°C</h1>
      <div class="flex">
        <img src="https://openweathermap.org/img/wn/04n.png" alt="" class="icon" />
        <div class="description">Cloudy</div>
      </div>
      <div class="humidity">Humidity: 60%</div>
      <div class="wind">Wind speed: 6.2 km/h</div>
    </div>
  </div>
</section>

	<div class="phppot-container">
		<div class="page-header">
			<span class="login-signup"><a href="logout.php">Logout</a></span>
		</div>
		
	</div>
  </main>
  <script src="script.js"></script>
</body>
</html>





</BODY>
</HTML>
