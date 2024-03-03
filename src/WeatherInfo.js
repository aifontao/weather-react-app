import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <span className="row">
        <div className="col p-0">
          <WeatherIcon code={props.data.icon} size={85} />
        </div>
        <div className="col p-0 CurrentWeatherDetails text-start">
          <div className="CurrentTemperatureValue">
            {props.data.temperature}
            <span className="Units">°C</span>
          </div>
          <small>Feels like {props.data.feelsLike}°</small>
        </div>
      </span>
      <span className="CurrentCityDetails">
        <h1>
          {props.data.cityName}
          <small className="Country"> ▪ {props.data.countryName}</small>
        </h1>
        <div className="text-capitalize">{props.data.description}</div>
      </span>
    </div>
  );
}
