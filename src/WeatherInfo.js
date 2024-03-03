import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="CurrentWeatherData">
        <div className="row ">
          <div className="col">
            <div className="row">
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
            </div>
          </div>
          <div className="col">
            <div className="CurrentCityDetails">
              <h1>
                {props.data.cityName}
                <small className="Country"> ▪ {props.data.countryName}</small>
              </h1>
              <div className="text-capitalize fs-9">
                {props.data.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
