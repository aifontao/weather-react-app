import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import WeatherDayWidgets from "./WeatherDayWidgets";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      cityName: response.data.city,
      countryName: response.data.country,
      date: new Date(response.data.time * 1000),
      temperature: Math.round(response.data.temperature.current),
      feelsLike: Math.round(response.data.temperature.feels_like),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
    });
  }
  function search() {
    const apiKey = "aof4801f27bc8e543a47a5fc535tf9b8";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            onChange={handleCityChange}
          ></input>
        </div>
        <div className="col-3">
          <input type="submit" value="Search" className="button"></input>
        </div>
      </div>
    </form>
  );

  if (weatherData.ready) {
    return (
      <div className="Weather">
        {form}
        <WeatherInfo data={weatherData} />
        <div className="d-flex mt-4">
          <div className="col-8 p-0">
            <Forecast />
          </div>
          <div className="col-4 p-0">
            <WeatherDayWidgets data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
