import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import WeatherDayWidgets from "./WeatherDayWidgets";
import FormattedDate from "./FormattedDate";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      cityName: response.data.name,
      countryName: response.data.sys.country,
      coordinates: response.data.coord,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      maxTemperature: Math.round(response.data.main.temp_max),
      minTemperature: Math.round(response.data.main.temp_min),
      feelsLike: Math.round(response.data.main.feels_like),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "4c9b53e4f8f5eb00df5915bdca340605";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
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
      <div className="row justify-content-evenly">
        <div className="col-9 p-0">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            onChange={handleCityChange}
          ></input>
        </div>
        <div className="col-2 p-0">
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
        <div className="row justify-content-evenly mt-4">
          <div className="col-7 g-0">
            <Forecast coordinates={weatherData.coordinates} />
          </div>
          <div className="col ">
            <WeatherDayWidgets data={weatherData} />
          </div>
        </div>
        <FormattedDate data={weatherData.date} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
