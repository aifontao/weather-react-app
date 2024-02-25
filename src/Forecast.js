import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="row DailyForecast m-1">
        <div className="col">Mon</div>
        <div className="Forecast-humidity col">
          <i className="fa-solid fa-droplet fa-s"></i>
          <span>9%</span>
        </div>
        <div className="col">
          <WeatherIcon code="clear-sky-day" size={30} />
        </div>
        <div className="col">
          <span className="Forecast-temperature-max">21°</span>
          <span className="Forecast-temperature-min col">10°</span>
        </div>
      </div>
    </div>
  );
}
