import React, { useState, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CityCard from "../components/CityCard";
import localService from "../services/localService";
  

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1550px",
  },
  text: {
    margin: "10px",

  },
  card: {
    margin: "10px",
  },
  noFavText: {
    marginTop: "20px",
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


const Favorites = (props) => {
  const classes = useStyles();
  const favorites = localService.query()

  return (
    <Grid container direction="column">
      <Grid 
        container item
        direction="row"
        justify="center"
        alignItems="center"
      >
        {(favorites && favorites.length > 0) && favorites.map((favorite, favoriteIdx) => (
          <Grid item className={classes.card} key={favoriteIdx}>
            <CityCard favorite={favorite} />
          </Grid>
        ))}
        {(!favorites || favorites.length === 0) && <Typography className={classes.noFavText}>
          No Favorite Cities.
        </Typography>}
      </Grid>
    </Grid>
  );
};


export default Favorites;

