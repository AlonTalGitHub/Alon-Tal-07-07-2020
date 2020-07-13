import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Home from "./pages/Home";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";

export const history = createBrowserHistory();

const useStyles = makeStyles((theme) => ({

}));

function App(props) {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item xs={12}><Header/></Grid>
      <Grid item container xs={12}>
        <Router history={history} basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/favorites" component={Favorites} exact />
          </Switch>
        </Router>
      </Grid>
    </Grid>
  );
}

export default App;
