import React from 'react';
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 150,
    maxHeight: 140,
    textAlign: "center",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginTop: 12,
  },
});

const CityCard = (props) => {
  const classes = useStyles();
  const { favorite } = props;
  
  const getWeeklyDay = () => {
    const favoriteDate = new Date(favorite.LocalObservationDateTime)
    return favoriteDate.toString().slice(0, 3);
  }

  const getTemprature = () => {
    console.log(favorite)
    let temperature = favorite.Temperature.Metric.Value;
    temperature = Math.floor(temperature).toString() + " °C";
    return temperature;
  }
  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {favorite.LocalizedName}
        </Typography>
        <Typography variant="h6" component="h2">
          {getWeeklyDay()}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {getTemprature()}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {favorite.WeatherText}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    city: state.city,
    currentWeather: state.currentWeather,
    favorites: state.favorites,
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(CityCard);