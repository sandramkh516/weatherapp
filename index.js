let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let dys = document.querySelector("#current");
let hour = now.getHours();
let min = now.getMinutes();
dys.innerHTML = `${day} ${hour}:${min}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = searchInput.value;
  let city = searchInput.value;
  let apiKey = "8ad8b5c077cab9b0c549fbc06335bed7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
let form = document.querySelector("#srch");
form.addEventListener("submit", search);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temp = document.querySelector("#tmp");
  temp.innerHTML = temperature;
  let descript = document.querySelector("#description");
  descript.innerHTML = response.data.weather[0].description;
  document.querySelector("#wnd").innerHTML = response.data.wind.speed;
  document.querySelector("#hum").innerHTML = response.data.main.humidity;
}
function currentLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "8ad8b5c077cab9b0c549fbc06335bed7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrent);
}
navigator.geolocation.getCurrentPosition(currentLocation);
function showCurrent(response) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let temp = document.querySelector("#tmp");
  temp.innerHTML = temperature;
  let descript = document.querySelector("#description");
  descript.innerHTML = response.data.weather[0].description;
  document.querySelector("#wnd").innerHTML = response.data.wind.speed;
  document.querySelector("#hum").innerHTML = response.data.main.humidity;
}
document
  .querySelector("#currently")
  .addEventListener("submit", currentLocation);
