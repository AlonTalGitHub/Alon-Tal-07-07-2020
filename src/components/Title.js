import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
  gutterBottom: {
    margin: "3em auto 3.3em",
  },
  title: {
    maxWidth: "1000px",
    color: "#111213",
  },
  '@media (max-width:500px)': {
    gutterBottom: {
      margin: "1.4em auto 2.5em",
    },
  },

}));

const Title = (props) => {
  const classes = useStyles();
  return (
    <Typography 
    className={classes.title}
    classes={{
      gutterBottom: classes.gutterBottom
    }} 
    gutterBottom
    variant="h1">
      Hey! I’m Alon, a Software Engineer & Front-End Developer.
    </Typography>
  );
};

export default Title;
