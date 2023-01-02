// get current date & time, and day and month names

let now = new Date();

now.getDay();
now.getDate();
now.getMonth();
now.getTime();
//console.log(now.getTime);

days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// 1. replace day, date, month, time for actual

let currentDate = document.querySelector(".currentDate");
currentDate.innerHTML = `${days[now.getDay()]} ${now.getDate()} ${
  months[now.getMonth()]
}, `;

let hrs = ("0" + now.getHours()).slice(-2);
let mins = ("0" + now.getMinutes()).slice(-2);

let currentTime = document.querySelector(".currentTime");
currentTime.innerHTML = `${hrs}:${mins}`;

// API response: update city temp in celsius (from either search OR current location)
//let city = response.data.name;

function showTemp(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  celsiusTemp = Math.round(response.data.main.temp);
  let tempC = document.querySelector(".currentTemp");
  tempC.innerHTML = celsiusTemp;

  // current emoji and alt description
  let emojiElement = document.querySelector("#emoji");
  emojiElement.setAttribute(
    "src",
    //`http://openweathermap.org/img/wn/04n@2x.png`
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  emojiElement.setAttribute("alt", response.data.weather[0].description);

  // current description
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector(
    ".currentDescription"
  ).innerHTML = `${response.data.weather[0].description}`;

  // current conditions
  document.querySelector(".feelsLike").innerHTML = `Feels like: ${Math.round(
    response.data.main.feels_like
  )}&deg;C`;
  document.querySelector(
    ".humidity"
  ).innerHTML = `Humidity: ${response.data.main.humidity}%`;
  document.querySelector(".wind").innerHTML = `Wind speed: ${Math.round(
    response.data.wind.speed
  )} km/hr`;
}

// Search form + update city name in h1 + trigger API call
function searchForCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#searchCity").value;
  let apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}`;
  axios.get(`${apiUrl}&appid=${apiKey}&units=metric`).then(showTemp);
}

// search form submit event listener
let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", searchForCity);

// search default load city: CBR
function searchCanberra() {
  let city = "Canberra";
  console.log(city);
  let apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}`;
  axios.get(`${apiUrl}&appid=${apiKey}&units=metric`).then(showTemp);
}

// current location & update h1 city
function showPosition(position) {
  let apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  axios
    .get(`${apiUrl}lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    .then(showTemp);
}

// get current position
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

// farenheit convert and display
function displayFtemp(event) {
  event.preventDefault();
  let farenheitTemp = (celsiusTemp * 9) / 5 + 32;
  //alert(farenheitTemp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(farenheitTemp);
}

// celsius convert and display
function displayCtemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemp);
}

// farenheit-celsius event listeners
let celsiusTemp = null;

let farenheitLink = document.querySelector("#farenheitLink");
farenheitLink.addEventListener("click", displayFtemp);

let celsiusLink = document.querySelector("#celsiusLink");
celsiusLink.addEventListener("click", displayCtemp);

// current position event listener
let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);

// search default city on load
searchCanberra();
