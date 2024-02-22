import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="CurrentWeatherData">
        <div className="row ">
          <div className="col-5">
            <div className="row">
              <div className="col-5 p-0">
                <img
                  src={props.data.iconUrl}
                  alt={props.data.description}
                  className="CurrentIcon"
                ></img>
              </div>
              <div className="col-7">
                <ul className="CurrentWeatherDetails">
                  <li>
                    <span className="CurrentTemperature">
                      {props.data.temperature}
                    </span>
                    <span className="Units">°C</span>
                  </li>
                  <li className=" text-capitalize">{props.data.description}</li>
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
                <h2>{props.data.countryName}</h2>
              </li>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row CurrentWeatherWidgets">
        <div className="col-3">
          {props.data.feelsLike}°C
          <br />
          Feels like
        </div>
        <div className="col-3">
          {props.data.pressure} bar
          <br />
          Pressure
        </div>
        <div className="col-3">
          {props.data.humidity}%
          <br />
          Humidity
        </div>
        <div className="col-3">
          {props.data.wind} km/h
          <br />
          Wind
        </div>
      </div>
    </div>
  );
}
