class Storage {
  constructor() {
    this.city;
    this.country;
    this.defaultCity = "Rio de Janeiro";
    this.defaultCountry = "Brazil";
  }

  getLocationData() {
    if(localStorage.getItem('city') === null) {
      this.city = this.defaultCity
    } else {
      this.city = localStorage.getItem('city');
    }

    if(localStorage.getItem('country') === null) {
      this.country = this.defaultCountry
    } else {
      this.country = localStorage.getItem('country');
    }

    return {
      city: this.city.replace(/(^|\s)\S/g, l => l.toUpperCase()),
      country: this.country.replace(/(^|\s)\S/g, l => l.toUpperCase())
    }
  }

  setLocationData(city, country) {
    localStorage.setItem('city', city);
    localStorage.setItem('country', country)
  }
}
