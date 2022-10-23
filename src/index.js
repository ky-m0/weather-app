// get current date & time

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
// done
let currentDate = document.querySelector(".currentDate");
currentDate.innerHTML = `${days[now.getDay()]} ${now.getDate()} ${
  months[now.getMonth()]
}`;

let currentTime = document.querySelector(".currentTime");
console.log(now.getHours());
console.log(now.getMinutes());
currentTime.innerHTML = `${now.getHours()}:${now.getMinutes()}`;
//currentTime.innerHTML = now.getTime();
//currentTime.innerHTML = now.getTime();

// 2. add search engine, update city name on page after submit
// done!
function searchCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#searchCity");
  console.log(inputCity.value);
  // alert(inputCity.value);
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

function currentTempF(event) {
  event.preventDefault();
  let currentTempF = document.querySelector(".currentTemp");
  currentTempF.innerHTML = "60";
}

let currentTempC = document.querySelector(".currentTemp");
currentTempC.innerHTML = "17";
