import React from "react";
import "./WeatherDayWidgets.css";

export default function WeatherDayWidgets(props) {
  return (
    <div className="row WeatherDayWidgets">
      <div className="col CurrentWeatherWidgets">
        <i className="fa-solid fa-temperature-low fa-xl m-3"></i>
        <div>{props.data.minTemperature}°C</div>
      </div>
      <div className="col CurrentWeatherWidgets">
        <i className="fa-solid fa-temperature-high fa-xl m-3"></i>
        <div>{props.data.maxTemperature}°C</div>
      </div>

      <div className="col CurrentWeatherWidgets">
        <i className="fa-solid fa-droplet fa-xl m-3"></i>
        <div>{props.data.humidity}%</div>
      </div>
      <div className="col CurrentWeatherWidgets">
        <i className="fa-solid fa-wind fa-xl m-3"></i>
        <div>{props.data.wind} km/h</div>
      </div>
    </div>
  );
}
