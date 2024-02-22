import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    console.log(response.data);
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
      iconUrl: `${response.data.condition.icon_url}`,
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
    console.log(city);
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
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
