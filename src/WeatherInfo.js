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
    </div>
  );
}
