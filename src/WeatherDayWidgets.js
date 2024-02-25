import React from "react";

export default function WeatherDayWidgets(props) {
  return (
    <div className="d-flex WeatherDayWidgets">
      <div className="row">
        <div className="col CurrentWeatherWidgets">
          <i className="fa-solid fa-temperature-half fa-2xl m-4"></i>
          <br />
          {props.data.feelsLike}°C
          <br />
          <small>Feels like</small>
        </div>
        <div className="col CurrentWeatherWidgets">
          <i className="fa-brands fa-cloudscale fa-solid fa-2xl m-4"></i>
          <br />
          {props.data.pressure} bar
          <br />
          <small>Pressure</small>
        </div>
      </div>
      <div className="row">
        <div className="col CurrentWeatherWidgets">
          <i className="fa-solid fa-droplet fa-2xl m-4"></i>
          <br />
          {props.data.humidity}%
          <br />
          <small>Humidity</small>
        </div>
        <div className="col CurrentWeatherWidgets">
          <i className="fa-solid fa-wind fa-2xl m-4"></i>
          <br />
          {props.data.wind} km/h
          <br />
          <small>Wind</small>
        </div>
      </div>
    </div>
  );
}
