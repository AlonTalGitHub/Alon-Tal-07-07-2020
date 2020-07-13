import React from "react";
import { AppBar, Toolbar, Typography, List, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    height: "70px",
  },
  typography: {
    flex: 1,
    fontSize: "16px",
    fontWeight: "600",
  },
  link: {
    paddingRight: "40px",
  },
  '@media (min-width:1300px)': {
    toolbar: {
      height: "80px",
    },
  },
  '@media (max-width:500px)': {
    link: {
      paddingRight: "20px",
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.typography}>Weather App</Typography>
        <List component="nav" aria-label="main manu">
          <Link href="/" className={classes.link} color="inherit" variant="body1">Home</Link>
          <Link href="/favorites" className={classes.link} color="inherit" variant="body1">Favorites</Link>
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
