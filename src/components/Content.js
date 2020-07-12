import React from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import WeatherCard from "./WeatherCard";
  

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1550px",
  },
  text: {
    margin: "10px",

  },
  card: {
    margin: "10px"
  },
  weatherText: {
    margin: "30px 60px 60px 60px",
    textAlign: "center",
  },
  textGrid: {
    border: "1px solid lightgrey",
  },
  '@media (max-width:730px)': {
  },
}));


const Content = (props) => {
  const classes = useStyles();
  const { city, currentWeather, forecasts } = props;

  const getTemprature = () => {
    const temperature = currentWeather.Temperature.Metric.Value;
    return temperature.toString() + " °C";
  }

  return (
    <Grid container direction="column">
      <Grid item container direction="row">
        <Grid item xs={1}></Grid>
        <Grid item container xs={10} direction="column" className={classes.textGrid}>
          <Typography className={classes.text} variant="h5" component="h2">
            {city.LocalizedName}
          </Typography>
          <Typography className={classes.text} variant="h5" component="h2">
            {getTemprature()}
          </Typography>
          <Typography className={classes.weatherText} variant="h2">
            {currentWeather.WeatherText}
          </Typography>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <Grid 
        container item
        direction="row"
        justify="center"
        alignItems="center"
      >
        {(forecasts) && forecasts.map((forecast, forecastIdx) => (
          <Grid item className={classes.card} key={forecastIdx}>
            <WeatherCard forecast={forecast} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    city: state.city,
    currentWeather: state.currentWeather,
    forecasts: state.forecasts,
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);

