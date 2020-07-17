import axios from "axios";
import Swal from 'sweetalert2';

export default {
  getCurrentWeather,
  getAutoCompCityList,
  getForecasts,
  getDefaultCity,
};

// const Axios = axios.create({
//   withCredentials: true,
// });

async function getCurrentWeather(cityKey) {
  try {
    const currentWeather = await axios.get(_getCurrentWeatherEndpoint(cityKey));
    const currentWeatherToReturn = currentWeather.data[0];
    return currentWeatherToReturn;
  } catch (err) {
    Swal.fire({
      type: 'error',
      title: 'You have exceeded 50 AJAX calls per Day',
      text: 'Please, Try again tomorrow or with another Api Key.'
    })
    throw err;
  }
}

function getAutoCompCityList(query) {
  let ans = axios.get(_getAutocompleteEndPoint(query));
  return ans.then((res) => {
    const { data } = res;
    return data;
  }).catch(() => {
    Swal.fire({
      type: 'error',
      title: 'You have exceeded 50 AJAX Calls a Day',
      text: 'Please, Try again tomorrow or with another Api Key.'
    })
  })
}

async function getForecasts(cityKey) {
  try {
    const forecasts = await axios.get(_getFiveDayForecastEndpoint(cityKey));
    const forecastsToReturn = forecasts.data.DailyForecasts;
    return forecastsToReturn;
  } catch (err) {
    Swal.fire({
      type: 'error',
      title: 'You have exceeded 50 AJAX Calls a Day',
      text: 'Please, Try again tomorrow or with another Api Key.'
    })
    throw err;
  }
}

function getDefaultCity() {
  return defaultCity[0];
}

const apiKey = "rNwjsLkEBTSSNaB7HrTGjfFCY6NoBhbX";

// nEcFKqO7yXdLTQEIyW86i8zsOZSNlb2x
// rNwjsLkEBTSSNaB7HrTGjfFCY6NoBhbX

const _getCurrentWeatherEndpoint = (cityKey) => {
  return "https://dataservice.accuweather.com/currentconditions/v1/" + cityKey + "?apikey=" + apiKey
}

const _getFiveDayForecastEndpoint = (cityKey) => {
  return "https://dataservice.accuweather.com/forecasts/v1/daily/5day/" + cityKey + "?apikey=" + apiKey
}

const _getAutocompleteEndPoint = (query) => {
  return "https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=" + apiKey + "&q=" + query
}

const _getGeolocationEndpoint = (lat, lon) => {
  return "https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=" + apiKey + "&q=" + lat + "%2C" + lon
}

const defaultCity = [
  {
    "Version": 1,
    "Key": "215854",
    "Type": "City",
    "Rank": 31,
    "LocalizedName": "Tel Aviv",
    "EnglishName": "Tel Aviv",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "MEA",
      "LocalizedName": "Middle East",
      "EnglishName": "Middle East"
    },
    "Country": {
      "ID": "IL",
      "LocalizedName": "Israel",
      "EnglishName": "Israel"
    },
    "AdministrativeArea": {
      "ID": "TA",
      "LocalizedName": "Tel Aviv",
      "EnglishName": "Tel Aviv",
      "Level": 1,
      "LocalizedType": "District",
      "EnglishType": "District",
      "CountryID": "IL"
    },
    "TimeZone": {
      "Code": "IDT",
      "Name": "Asia/Jerusalem",
      "GmtOffset": 3,
      "IsDaylightSaving": true,
      "NextOffsetChange": "2020-10-24T23:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 32.045,
      "Longitude": 34.77,
      "Elevation": {
        "Metric": {
          "Value": 34,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 111,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence"
    ]
  },
  {
    "LocalObservationDateTime": "2020-07-16T14:36:00+03:00",
    "EpochTime": 1594899360,
    "WeatherText": "Sunny",
    "WeatherIcon": 1,
    "HasPrecipitation": false,
    "PrecipitationType": null,
    "IsDayTime": true,
    "Temperature": {
      "Metric": {
        "Value": 29.8,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 86,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
  },
];