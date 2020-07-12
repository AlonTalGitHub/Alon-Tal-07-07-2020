const initialState = { city: { "Key": "215854", "LocalizedName": "Tel Aviv" }, currentWeather: {Temperature: { Metric: { Value: "--"}}}, forecasts: [], autoCompCityList: [] }

const homeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "LOAD_CITY":
      return {
        ...state,
        city: action.city,
      };
    case "WEATHER_UPDATE":
      return {
        ...state,
        currentWeather: {
          ...action.currentWeather,
        },
      };
    case "AUTO_COMPLETE_UPDATE":
      return {
        ...state,
        autoCompCityList: action.cityList,
      };
    case "FORECASTS_UPDATE":
      return {
        ...state,
        forecasts: [
          ...action.forecasts
        ],
      };
    default:
      return state;
  }
}

export default homeReducer;