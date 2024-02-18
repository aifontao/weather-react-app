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
      <div className="row">
        <div className="col-10">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            onChange={updateCity}
          ></input>
        </div>
        <div className="col-2">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary"
          ></input>
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="Weather">
        {form}
        <div className="CurrentWeatherData">
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <img src={forecast.icon} alt={forecast.description}></img>
                </div>
                <div className="col-6">
                  <ul>
                    <li>{forecast.temperature} °C</li>
                    <li>Feels like 14°C</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <h1>{forecast.cityName} - Country</h1>
                </li>
                <li>Sunday, 18 Feb 2024 | 20:04 </li>
                <li>{forecast.description}</li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>Monday 💧9% 🌞 21° 10°</li>
                <li>Tuesday 💧9% 🌞 21° 10°</li>
                <li>Wednesday 💧9% 🌞 21° 10°</li>
                <li>Friday 💧9% 🌞 21° 10°</li>
                <li>Saturday 💧9% 🌞 21° 10°</li>
              </ul>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-6">Max temp</div>
                <div className="col-6">Min temp</div>
              </div>
              <div className="row">
                <div className="col-6">Humidity: {forecast.humidity} %</div>
                <div className="col-6">Wind: {forecast.wind} km/h</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
