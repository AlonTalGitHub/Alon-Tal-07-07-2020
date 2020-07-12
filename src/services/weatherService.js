import axios from "axios";

export default {
  getCurrentWeather,
  getAutoCompCityList,
  getForecasts,
  getDefaultForecasts,
  getDefaultCurrentWeather,
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
    console.log('Cannot Connect to weather DB', err)
    throw err;
  }
}

function getAutoCompCityList(query) {
  let ans = axios.get(_getAutocompleteEndPoint(query));
  return ans.then((res) => {
    const { data } = res;
    return data;
  });
}

async function getForecasts(cityKey) {
  try {
    const forecasts = await axios.get(_getFiveDayForecastEndpoint(cityKey));
    const forecastsToReturn = forecasts.data.DailyForecasts;
    return forecastsToReturn;
  } catch (err) {
    console.log('Cannot Connect to forecasts DB', err)
    throw err;
  }
}

function getDefaultForecasts() {
  // Todo: call getForecasts
  return telAviv[2]["DailyForecasts"];
}

function getDefaultCurrentWeather() {
  console.log(telAviv[1])
  return telAviv[1];
}

function getDefaultCity() {
  return telAviv[0];
}

const apiKey = "nEcFKqO7yXdLTQEIyW86i8zsOZSNlb2x";

const _getGeolocationEndpoint = (lat, lon) => {
    return "https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=" + apiKey + "&q=" + lat + "%2C" + lon
}

const _getCurrentWeatherEndpoint = (cityKey) => {
    return "https://dataservice.accuweather.com/currentconditions/v1/" + cityKey + "?apikey=" + apiKey
}

const _getFiveDayForecastEndpoint = (cityKey) => {
    return "https://dataservice.accuweather.com/forecasts/v1/daily/5day/" + cityKey + "?apikey=" + apiKey
}

const _getAutocompleteEndPoint = (query) => {
    return "https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=" + apiKey + "&q=" + query
}


const telAviv = [
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
    "LocalObservationDateTime": "2020-07-11T15:40:00+03:00",
    "EpochTime": 1594471200,
    "WeatherText": "Partly sunny",
    "WeatherIcon": 3,
    "HasPrecipitation": false,
    "PrecipitationType": null,
    "IsDayTime": true,
    "Temperature": {
      "Metric": {
        "Value": 31,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 88,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
  },
  {
    "Headline": {
      "EffectiveDate": "2020-07-11T08:00:00+03:00",
      "EffectiveEpochDate": 1594443600,
      "Severity": 4,
      "Text": "Pleasant this weekend",
      "Category": "mild",
      "EndDate": null,
      "EndEpochDate": null,
      "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2020-07-08T07:00:00+03:00",
        "EpochDate": 1594180800,
        "Sun": {
          "Rise": "2020-07-08T05:42:00+03:00",
          "EpochRise": 1594176120,
          "Set": "2020-07-08T19:50:00+03:00",
          "EpochSet": 1594227000
        },
        "Moon": {
          "Rise": "2020-07-08T22:30:00+03:00",
          "EpochRise": 1594236600,
          "Set": "2020-07-09T09:35:00+03:00",
          "EpochSet": 1594276500,
          "Phase": "WaningGibbous",
          "Age": 17
        },
        "Temperature": {
          "Minimum": {
            "Value": 24,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 30.7,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 23,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 35.1,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 23,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 30.6,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "HoursOfSun": 13.1,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 0,
            "Unit": "C",
            "UnitType": 17
          },
          "Cooling": {
            "Value": 9,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "AirAndPollen": [
          {
            "Name": "AirQuality",
            "Value": 40,
            "Category": "Good",
            "CategoryValue": 1,
            "Type": "Ozone"
          },
          {
            "Name": "Grass",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Mold",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Ragweed",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Tree",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "UVIndex",
            "Value": 12,
            "Category": "Extreme",
            "CategoryValue": 5
          }
        ],
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false,
          "ShortPhrase": "Sunny and nice",
          "LongPhrase": "Sunny and nice",
          "PrecipitationProbability": 0,
          "ThunderstormProbability": 0,
          "RainProbability": 0,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 13,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 292,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 24.1,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 334,
              "Localized": "NNW",
              "English": "NNW"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 4
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false,
          "ShortPhrase": "Mainly clear",
          "LongPhrase": "Mainly clear",
          "PrecipitationProbability": 3,
          "ThunderstormProbability": 0,
          "RainProbability": 3,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 7.4,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 320,
              "Localized": "NW",
              "English": "NW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 20.4,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 3,
              "Localized": "N",
              "English": "N"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 25
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
      },
      {
        "Date": "2020-07-09T07:00:00+03:00",
        "EpochDate": 1594267200,
        "Sun": {
          "Rise": "2020-07-09T05:42:00+03:00",
          "EpochRise": 1594262520,
          "Set": "2020-07-09T19:50:00+03:00",
          "EpochSet": 1594313400
        },
        "Moon": {
          "Rise": "2020-07-09T23:04:00+03:00",
          "EpochRise": 1594325040,
          "Set": "2020-07-10T10:31:00+03:00",
          "EpochSet": 1594366260,
          "Phase": "WaningGibbous",
          "Age": 18
        },
        "Temperature": {
          "Minimum": {
            "Value": 22.9,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 29.9,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 22.2,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 33.8,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 22.2,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 29.2,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "HoursOfSun": 11.1,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 0,
            "Unit": "C",
            "UnitType": 17
          },
          "Cooling": {
            "Value": 8,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "AirAndPollen": [
          {
            "Name": "AirQuality",
            "Value": 41,
            "Category": "Good",
            "CategoryValue": 1,
            "Type": "Particle Pollution"
          },
          {
            "Name": "Grass",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Mold",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Ragweed",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Tree",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "UVIndex",
            "Value": 12,
            "Category": "Extreme",
            "CategoryValue": 5
          }
        ],
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false,
          "ShortPhrase": "Mostly sunny and beautiful",
          "LongPhrase": "Beautiful with sunshine and patchy clouds",
          "PrecipitationProbability": 2,
          "ThunderstormProbability": 0,
          "RainProbability": 2,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 13,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 289,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 22.2,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 307,
              "Localized": "NW",
              "English": "NW"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 21
        },
        "Night": {
          "Icon": 33,
          "IconPhrase": "Clear",
          "HasPrecipitation": false,
          "ShortPhrase": "Clear",
          "LongPhrase": "Clear",
          "PrecipitationProbability": 0,
          "ThunderstormProbability": 0,
          "RainProbability": 0,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 7.4,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 5,
              "Localized": "N",
              "English": "N"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 18.5,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 3,
              "Localized": "N",
              "English": "N"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 8
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
      },
      {
        "Date": "2020-07-10T07:00:00+03:00",
        "EpochDate": 1594353600,
        "Sun": {
          "Rise": "2020-07-10T05:43:00+03:00",
          "EpochRise": 1594348980,
          "Set": "2020-07-10T19:50:00+03:00",
          "EpochSet": 1594399800
        },
        "Moon": {
          "Rise": "2020-07-10T23:34:00+03:00",
          "EpochRise": 1594413240,
          "Set": "2020-07-11T11:26:00+03:00",
          "EpochSet": 1594455960,
          "Phase": "WaningGibbous",
          "Age": 19
        },
        "Temperature": {
          "Minimum": {
            "Value": 23.5,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 30.2,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 23.9,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 34.4,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 23.9,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 30.1,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "HoursOfSun": 12.4,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 0,
            "Unit": "C",
            "UnitType": 17
          },
          "Cooling": {
            "Value": 9,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "AirAndPollen": [
          {
            "Name": "AirQuality",
            "Value": 45,
            "Category": "Good",
            "CategoryValue": 1,
            "Type": "Particle Pollution"
          },
          {
            "Name": "Grass",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Mold",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Ragweed",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Tree",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "UVIndex",
            "Value": 12,
            "Category": "Extreme",
            "CategoryValue": 5
          }
        ],
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false,
          "ShortPhrase": "Sunshine and pleasant",
          "LongPhrase": "Sunshine and pleasant",
          "PrecipitationProbability": 0,
          "ThunderstormProbability": 0,
          "RainProbability": 0,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 13,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 294,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 24.1,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 335,
              "Localized": "NNW",
              "English": "NNW"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 5
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false,
          "ShortPhrase": "Mainly clear",
          "LongPhrase": "Mainly clear",
          "PrecipitationProbability": 1,
          "ThunderstormProbability": 0,
          "RainProbability": 1,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 7.4,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 96,
              "Localized": "E",
              "English": "E"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 20.4,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 350,
              "Localized": "N",
              "English": "N"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 29
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
      },
      {
        "Date": "2020-07-11T07:00:00+03:00",
        "EpochDate": 1594440000,
        "Sun": {
          "Rise": "2020-07-11T05:43:00+03:00",
          "EpochRise": 1594435380,
          "Set": "2020-07-11T19:49:00+03:00",
          "EpochSet": 1594486140
        },
        "Moon": {
          "Rise": null,
          "EpochRise": null,
          "Set": "2020-07-11T11:26:00+03:00",
          "EpochSet": 1594455960,
          "Phase": "WaningGibbous",
          "Age": 20
        },
        "Temperature": {
          "Minimum": {
            "Value": 25.8,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 30.5,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 25.3,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 35.1,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 25.3,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 30.9,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "HoursOfSun": 11.8,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 0,
            "Unit": "C",
            "UnitType": 17
          },
          "Cooling": {
            "Value": 10,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "AirAndPollen": [
          {
            "Name": "AirQuality",
            "Value": 50,
            "Category": "Good",
            "CategoryValue": 1,
            "Type": "Particle Pollution"
          },
          {
            "Name": "Grass",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Mold",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Ragweed",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Tree",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "UVIndex",
            "Value": 12,
            "Category": "Extreme",
            "CategoryValue": 5
          }
        ],
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false,
          "ShortPhrase": "Mostly sunny and beautiful",
          "LongPhrase": "Mostly sunny and beautiful",
          "PrecipitationProbability": 0,
          "ThunderstormProbability": 0,
          "RainProbability": 0,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 13,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 287,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 22.2,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 307,
              "Localized": "NW",
              "English": "NW"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 12
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": false,
          "ShortPhrase": "Partly cloudy and very warm",
          "LongPhrase": "Partly cloudy and very warm",
          "PrecipitationProbability": 0,
          "ThunderstormProbability": 0,
          "RainProbability": 0,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 7.4,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 269,
              "Localized": "W",
              "English": "W"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 18.5,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 339,
              "Localized": "NNW",
              "English": "NNW"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 31
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
      },
      {
        "Date": "2020-07-12T07:00:00+03:00",
        "EpochDate": 1594526400,
        "Sun": {
          "Rise": "2020-07-12T05:44:00+03:00",
          "EpochRise": 1594521840,
          "Set": "2020-07-12T19:49:00+03:00",
          "EpochSet": 1594572540
        },
        "Moon": {
          "Rise": "2020-07-12T00:02:00+03:00",
          "EpochRise": 1594501320,
          "Set": "2020-07-12T12:19:00+03:00",
          "EpochSet": 1594545540,
          "Phase": "Last",
          "Age": 21
        },
        "Temperature": {
          "Minimum": {
            "Value": 25.8,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 30.8,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 25.4,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 36,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 25.4,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 32.1,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "HoursOfSun": 12.3,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 0,
            "Unit": "C",
            "UnitType": 17
          },
          "Cooling": {
            "Value": 10,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "AirAndPollen": [
          {
            "Name": "AirQuality",
            "Value": 29,
            "Category": "Good",
            "CategoryValue": 1,
            "Type": "Particle Pollution"
          },
          {
            "Name": "Grass",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Mold",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Ragweed",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Tree",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "UVIndex",
            "Value": 12,
            "Category": "Extreme",
            "CategoryValue": 5
          }
        ],
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false,
          "ShortPhrase": "Sunshine and pleasant",
          "LongPhrase": "Abundant sunshine and pleasant",
          "PrecipitationProbability": 0,
          "ThunderstormProbability": 0,
          "RainProbability": 0,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 13,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 285,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 22.2,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 295,
              "Localized": "WNW",
              "English": "WNW"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 7
        },
        "Night": {
          "Icon": 35,
          "IconPhrase": "Partly cloudy",
          "HasPrecipitation": false,
          "ShortPhrase": "Partly cloudy and very warm",
          "LongPhrase": "Partly cloudy and very warm",
          "PrecipitationProbability": 0,
          "ThunderstormProbability": 0,
          "RainProbability": 0,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 7.4,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 279,
              "Localized": "W",
              "English": "W"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 16.7,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 319,
              "Localized": "NW",
              "English": "NW"
            }
          },
          "TotalLiquid": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 0,
          "HoursOfRain": 0,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 44
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
      }
    ]
  }

];