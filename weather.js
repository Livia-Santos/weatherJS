class Weather {
  constructor(city, country) {
    this.apiKey = "7d98369c3a7970af";
    this.city = city;
    this.country = country;
  }
  // fetch weather from api
  async getWeather() {
    const response = await fetch(`http://api.wunderground.com/api/${
      this.apiKey
    }/geolookup/conditions/forecast/q/${this.country}/${this.city}.json
`);

    const responseData = await response.json();
    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city, countr) {
    this.city = city;
    this.country = country;
  }
}
