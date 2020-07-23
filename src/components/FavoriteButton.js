import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from "@material-ui/core/styles";
import localService from "../services/localService";
import { isFavoriteFound } from "../helpers/functions";

const useStyles = makeStyles((theme) => ({
  button: {
    color: props => (isFavoriteFound(props.city) ? "#FFDF00" : "lightGrey"),
  },
}));

const FavoriteButton = (props) => {
  const classes = useStyles(props);
  const { city, currentWeather } = props;
  const [isFavorite, setIsFavorite] = useState(isFavoriteFound(city))

  useEffect(() => {
    setIsFavorite(isFavoriteFound(city))
  }, [city]);

  const handleFavorites = () => {
    if(isFavorite) {
      localService.remove(city.Key)
    } else {
      const newFavorite = { ...city, ...currentWeather, isFavorite: true}
      localService.save(newFavorite)
    }
    setIsFavorite(prevState => !prevState)
  }
  
  return (
    <IconButton onClick={handleFavorites} variant="contained" >
      <StarIcon className={classes.button} />
    </IconButton>
  );
};

const mapStateToProps = (state) => {
  return {
    city: state.city,
    currentWeather: state.currentWeather,
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);




