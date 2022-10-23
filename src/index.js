// get current date & time, and day and month names

let now = new Date();

now.getDay();
now.getDate();
now.getMonth();
now.getTime();
console.log(now.getTime);

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
// done!
let currentDate = document.querySelector(".currentDate");
currentDate.innerHTML = `${days[now.getDay()]} ${now.getDate()} ${
  months[now.getMonth()]
}`;

let currentTime = document.querySelector(".currentTime");
currentTime.innerHTML = `${now.getHours()}:${now.getMinutes()}`;

// 2. add search engine, update city name on page after submit
// done!
function searchCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#searchCity");
  let currentCity = document.querySelector(".currentCity");
  currentCity.innerHTML = inputCity.value;
}
let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", searchCity);

// 3. Display a fake temperature (i.e 17) in Celsius and add
//a link to convert it to Fahrenheit. When clicking on it,
//it should convert the temperature to Fahrenheit.
//When clicking on Celsius, it should convert it back to
//Celsius.

function currentTempF() {
  let tempF = document.querySelector(".currentTemp");
  tempF.innerHTML = "60";
}

function currentTempC() {
  let tempC = document.querySelector(".currentTemp");
  tempC.innerHTML = "17";
}

// test
// function test() {
//  alert("worked!");
// }
