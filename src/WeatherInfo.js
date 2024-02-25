import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import CurrentTemperature from "./CurrentTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="CurrentWeatherData">
        <div className="row ">
          <div className="col-5">
            <div className="row">
              <div className="col-5 p-0">
                <WeatherIcon code={props.data.icon} />
              </div>
              <div className="col-7 p-0">
                <ul className="CurrentWeatherDetails">
                  <CurrentTemperature celsius={props.data.temperature} />
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
          <i className="fa-solid fa-temperature-half"></i>
          <br />
          {props.data.feelsLike}°C
          <br />
          <small>Feels like</small>
        </div>
        <div className="col-3">
          <i className="fa-brands fa-cloudscale fa-solid"></i>
          <br />
          {props.data.pressure} bar
          <br />
          <small>Pressure</small>
        </div>
        <div className="col-3">
          <i className="fa-solid fa-droplet"></i>
          <br />
          {props.data.humidity}%
          <br />
          <small>Humidity</small>
        </div>
        <div className="col-3">
          <i className="fa-solid fa-wind"></i>
          <br />
          {props.data.wind} km/h
          <br />
          <small>Wind</small>
        </div>
      </div>
    </div>
  );
}
