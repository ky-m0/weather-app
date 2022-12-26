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
  console.log(response.data);
  document.querySelector("h1").innerHTML = response.data.name;
  //console.log(response.data.main.temp);
  tempCround = Math.round(response.data.main.temp);
  //console.log(tempCround);
  let tempC = document.querySelector(".currentTemp");
  tempC.innerHTML = tempCround;
  document.querySelector(
    ".humidity"
  ).innerHTML = `Humidity: ${response.data.main.humidity}%`;
  document.querySelector(".wind").innerHTML = `Wind speed: ${Math.round(
    response.data.wind.speed
  )} km/hr`;
}

// API call (using search)

// Search form + update city name in h1 + trigger API call

function searchForCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#searchCity").value;
  //console.log(inputCity);
  let apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}`;
  axios.get(`${apiUrl}&appid=${apiKey}&units=${units}`).then(showTemp);
}
// search form submit event listener
let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", searchForCity);

function searchCanberra() {
  let city = "Canberra";
  console.log(city);
  let apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}`;
  axios.get(`${apiUrl}&appid=${apiKey}&units=${units}`).then(showTemp);
}

searchCanberra();

// 3. Display a fake temperature (i.e 17) in Celsius and add
//a link to convert it to Fahrenheit. When clicking on it,
//it should convert the temperature to Fahrenheit.
//When clicking on Celsius, it should convert it back to
//Celsius.

//function currentTempF() {
// let tempF = document.querySelector(".currentTemp");
// tempF.innerHTML = "60";
// }

// function currentTempC() {
// let tempC = document.querySelector(".currentTemp");
// tempC.innerHTML = "17";
// }

// current location API call

// current location : update h1
function showPosition(position) {
  //console.log(position);
  //console.log(position.coords.latitude);
  //console.log(position.coords.longitude);

  let apiKey2 = "46fac47dd8b8fa26d1b6852218ad3dfe";
  let units2 = "metric";
  let apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?`;
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  // console.log(lat);
  //console.log(lon);
  axios
    .get(`${apiUrl2}lat=${lat}&lon=${lon}&appid=${apiKey2}&units=${units2}`)
    .then(showTemp);
}

// get current position

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

// current position event listener

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
