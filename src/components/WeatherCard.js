import React from 'react';
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

const SimpleCard = (props) => {
  const classes = useStyles();
  const { forecast } = props;
  
  const getWeeklyDay = () => {
    const forecastDate = new Date(forecast.Date)
    return forecastDate.toString().slice(0, 3);
  }

  const getTemprature = () => {
    const maxTemp = forecast.Temperature.Maximum.Value;
    const minTemp = forecast.Temperature.Minimum.Value;
    const avgTemp = Math.floor((((maxTemp + minTemp) / 2) - 32) * 5/9).toString() + " °C";
    return avgTemp;
  }
  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {getWeeklyDay()}
        </Typography>
        <Typography variant="h6" component="h2">
          {forecast.Day.IconPhrase}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {getTemprature()}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}


export default SimpleCard;