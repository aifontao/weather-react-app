import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="CurrentWeatherData">
        <div className="row ">
          <div className="col-5">
            <div className="row">
              <div className="col-5 p-0">
                <WeatherIcon code={props.data.icon} size={85} />
              </div>
              <div className="col-7 p-0">
                <ul className="CurrentWeatherDetails">
                  <li className="CurrentTemperature">
                    <span className="CurrentTemperatureValue">
                      {props.data.temperature}
                    </span>
                    <span className="Units">
                      <strong> °C </strong>
                    </span>
                  </li>
                  <li>
                    {props.data.maxTemperature}° / {props.data.minTemperature}°
                    Feels like {props.data.feelsLike}°
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-7">
            <ul className="CurrentCityDetails">
              <li>
                <h1>{props.data.cityName}</h1>
              </li>
              <li>
                <h2>
                  {props.data.countryName}{" "}
                  <i className="fa-solid fa-location-dot"></i>
                </h2>
              </li>
              <li className=" text-capitalize">{props.data.description}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
