// Initialize weather object
const weather = new Weather("Rio de Janeiro", "Brazil");

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather.getWeather()
    .then(results => {
    console.log(results);
  })
  .catch(err => console.log(err));
}
