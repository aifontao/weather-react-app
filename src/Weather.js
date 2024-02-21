import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

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
      //iconUrl: response.data.condition.icon_url,
    });
  }

  let city = "London";
  let units = "metric";
  const apiKey = "aof4801f27bc8e543a47a5fc535tf9b8";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);

  let form = (
    <form>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
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
        <div className="CurrentWeatherData">
          <div className="row ">
            <div className="col-5">
              <div className="row">
                <div className="col-5 p-0">
                  <img
                    src={`https://ssl.gstatic.com/onebox/weather/64/cloudy.png`}
                    alt={weatherData.description}
                    className="CurrentIcon"
                  ></img>
                </div>
                <div className="col-7">
                  <ul className="CurrentWeatherDetails">
                    <li>
                      <span className="CurrentTemperature">
                        {weatherData.temperature}
                      </span>
                      <span className="Units">°C</span>
                    </li>
                    <li className=" text-capitalize">
                      {weatherData.description}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-7">
              <ul className="CurrentCityDetails">
                <li>
                  <h1>{weatherData.cityName}</h1>
                </li>
                <li>
                  <h2>{weatherData.countryName}</h2>
                </li>
                <li>
                  <FormattedDate date={weatherData.date} />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row CurrentWeatherWidgets">
          <div className="col-3">
            {weatherData.feelsLike}°C
            <br />
            Feels like
          </div>
          <div className="col-3">
            {weatherData.pressure} bar
            <br />
            Pressure
          </div>
          <div className="col-3">
            {weatherData.humidity}%
            <br />
            Humidity
          </div>
          <div className="col-3">
            {weatherData.wind} km/h
            <br />
            Wind
          </div>
        </div>
      </div>
    );
  } else {
    let city = "London";
    let units = "metric";
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
