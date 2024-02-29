import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="CurrentWeatherData">
        <div className="row ">
          <div className="col">
            <div className="row">
              <div className="col p-0 CurrentWeatherDetails">
                <div className="CurrentTemperatureValue">
                  {props.data.temperature}
                  <span className="Units">°C</span>
                </div>
              </div>
              <div className="col p-0">
                <WeatherIcon code={props.data.icon} size={85} />
              </div>
              <div className=" text-capitalize">{props.data.description}</div>
              <small>Feels like {props.data.feelsLike}°</small>
            </div>
          </div>

          <div className="col">
            <div className="CurrentCityDetails">
              <h1>{props.data.cityName}</h1>
              <div>
                {props.data.countryName}{" "}
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <FormattedDate date={props.data.date} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
