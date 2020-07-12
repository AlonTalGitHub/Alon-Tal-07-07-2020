import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(() => ({
  paper: {
    margin: "150px auto",
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    maxWidth: "1000px",
    textTransform: "uppercase",
    fontWeight: "700",
    lineHeight: "2.3",
    letterSpacing: "0px",
  },
  text: {
    marginTop: "20px",
    // maxWidth: "990px",
  },
  "@media (max-width:500px)": {
    paper: {
      margin: "60px auto",
    },
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={0}>
      <Paper className={classes.titleWrapper} elevation={0}>
        <Typography
          className={classes.title}
          variant="h4"
        >
          about me
        </Typography>
        <svg style={{marginLeft: "7px"}} height="30" width="30">
          <circle cx="15" cy="15" r="11.5" stroke="#7a7a7a75" strokeWidth="1" fill="white" />
        </svg>
      </Paper>
      <Typography className={classes.text} variant="subtitle1">
        In 2017, I had the opportunity to study at Les Gobelins, where I
        acquired the fundamentals skills in order to work in the graphic
        industry. Currently, on my final year of a Web Bachelor at Hétic, I’m
        now working at the heart of the digital field as UI Designer and
        Front-Developer.
      </Typography>
    </Paper>
  );
};

export default About;
