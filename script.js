var searchHistoryList = [];
var apikey = "0d1fa8254b7ad113719326591647eaa9";
let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

function currentCondition(city) {
var queryURL = `https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}`;
$.ajaz({
    url:queryURL,
    method:"GET"
}).then(function(cityWeatherResponse) {
    console.log(cityWeatherResponse);

}
)}
