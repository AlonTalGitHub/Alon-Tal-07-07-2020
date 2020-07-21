import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from "@material-ui/core/styles";
import { 
  setDefaultCity, 
  updateCity,
  updateCurrentWeather, 
  updateForecasts, 
  getAutoCompCityList, 
  resetAutoCompCityList } from "../redux/actions";

import Content from "../components/Content";
import weatherService from "../services/weatherService";

const useStyles = makeStyles(() => ({
  button: {
    width: "150px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    margin: "30px auto", 
    alignItems: "center",
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const [selectedCity, setSelectedCity] = useState(weatherService.getDefaultCity())

  useEffect(() => {
    async function fetchData() {
      await props.updateForecasts(selectedCity);
      await props.updateCurrentWeather(selectedCity);
    }
    fetchData();
  }, []);

  const handleChange = async (ev) => {
    let { value } = ev.target
    if (value !== "") {
      await props.getAutoCompCityList(value)
    } else {
      props.resetAutoCompCityList()
    }
  }

  const submitForm = async (ev) => {
    ev.preventDefault();
    await props.updateCity(selectedCity);
    await props.updateCurrentWeather(selectedCity);
    await props.updateForecasts(selectedCity);
  }

  const handleSelected = (ev, value) => {
    value = value.split(' (')[0]
    console.log(value);
    const selected = Object.values(props.autoCompCityList).find(city => city.LocalizedName === value)
    setSelectedCity({ ...selected })
  }

  return (
    <Grid item container direction="column">
      <Grid item>
          <Autocomplete
            freeSolo
            onChange={handleSelected}
            disableClearable
            options={(props.autoCompCityList) && props.autoCompCityList.map((option) => {
              return option.LocalizedName + " (" + option.Country.ID + ")"
              })}
            renderInput={(params) => (
              <form onSubmit={submitForm} className={classes.form}>
                <TextField
                  {...params}
                  className={classes.textField}
                  label="Search City"
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange}
                  InputProps={{ ...params.InputProps, type: 'search' }}
                />
                <Button className={classes.button} type="submit" variant="contained" color="primary">Check Weather</Button>
              </form>
            )}
          />
      </Grid>
      <Grid item>
        <Content />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    city: state.city,
    currentWeather: state.currentWeather,
    autoCompCityList: state.autoCompCityList,
  };
};

const mapDispatchToProps = {
  updateCity,
  setDefaultCity,
  updateCurrentWeather,
  updateForecasts,
  getAutoCompCityList,
  resetAutoCompCityList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);