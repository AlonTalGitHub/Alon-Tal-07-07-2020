import weatherService from "../services/weatherService";

export function updateCity(city) {
  return (dispatch) => {
    dispatch(_loadCity(city));
  };
}

// THUNK
export function updateCurrentWeather(city) {
  return async dispatch => {
    try {
      const currentWeather = await weatherService.getCurrentWeather(city.Key);
      dispatch(_updateCurrentWeather(currentWeather));
    } catch (err) {
      console.log('ForecastsAction: err in updateForecasts', err);
    }
  };
}

//THUNK
export function updateForecasts(city) {
  return async dispatch => {
    try {
      const forecasts = await weatherService.getForecasts(city.Key);
      dispatch(_updateForecasts(forecasts));
    } catch (err) {
      console.log('ForecastsAction: err in updateForecasts', err);
    }
  };
}

// THUNK
export function getAutoCompCityList(value) {
  return (dispatch) => {
    weatherService.getAutoCompCityList(value).then((cityList) => {
      dispatch(_updateAutoCompCityList(cityList));
    }).catch();
  };
}

export function resetAutoCompCityList() {
  return (dispatch) => {
    dispatch(_updateAutoCompCityList([]));
  };
}

export function setDefaultCity() {
  return (dispatch) => {
    dispatch(_loadCity(weatherService.getDefaultCity()));
  };
}


// ACTIONS

function _loadCity(city) {
  return {
    type: "LOAD_CITY",
    city,
  };
}

function _updateCurrentWeather(currentWeather) {
  return {
    type: "WEATHER_UPDATE",
    currentWeather,
  };
}

function _updateForecasts(forecasts) {
  return {
    type: "FORECASTS_UPDATE",
    forecasts,
  }
}

function _updateAutoCompCityList(cityList) {
  return {
    type: "AUTO_COMPLETE_UPDATE",
    cityList,
  }
}
