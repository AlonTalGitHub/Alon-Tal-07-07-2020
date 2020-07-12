import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Home from "./pages/Home";
import Header from "./components/Header";

export const history = createBrowserHistory();

const useStyles = makeStyles((theme) => ({

}));

function App(props) {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item xs={12}><Header/></Grid>
      <Grid item container xs={12}>
        <Router history={history}>
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </Router>
      </Grid>
    </Grid>
  );
}

export default App;
