import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let maxTemperature = Math.round(props.data.temp.max);
    return `${maxTemperature}°`;
  }
  function minTemperature() {
    let minTemperature = Math.round(props.data.temp.min);
    return `${minTemperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="row DailyForecast m-1">
      <div className="col-2">{day()}</div>
      <div className="col-3 pe-0">
        <i className="fa-solid fa-droplet fa-s"></i>
        <span>{props.data.humidity}%</span>
      </div>
      <div className="col-3">
        <WeatherIcon code={props.data.weather[0].icon} size={30} />
      </div>
      <div className="col-2">
        <span className="Forecast-temperature-max">{maxTemperature()}</span>
      </div>
      <div className="col-2">
        <span className="Forecast-temperature-min col">{minTemperature()}</span>
      </div>
    </div>
  );
}
