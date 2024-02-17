import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState();
  const [loaded, setLoaded] = useState();
  const [forecast, setForecast] = useState();

  function showForecast(response) {
    setLoaded(true);
    console.log(response);
    setForecast({
      cityName: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "aof4801f27bc8e543a47a5fc535tf9b8";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showForecast);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      ></input>
      <input type="submit" value="Search"></input>
    </form>
  );

  if (loaded) {
    return (
      <div className="Weather Container">
        {form}
        <div className="CurrentWeatherData">
          <h1>{forecast.cityName}</h1>
          <ul>
            <li>Tempertature: {forecast.temperature} °C</li>
            <li>Description: {forecast.description}</li>
            <li>Humidity: {forecast.humidity} %</li>
            <li>Wind: {forecast.wind} km/h</li>
            <li>
              <img src={forecast.icon} alt={forecast.description}></img>{" "}
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
