import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "c8735bb7e8e2f8d8a38c7501f3cd47d3";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Forecast">
      <div className="row DailyForecast m-1">
        <div className="col">Mon</div>
        <div className="Forecast-humidity col">
          <i className="fa-solid fa-droplet fa-s"></i>
          <span>9%</span>
        </div>
        <div className="col">
          <WeatherIcon code="09d" size={30} />
        </div>
        <div className="col">
          <span className="Forecast-temperature-max">21°</span>
          <span className="Forecast-temperature-min col">10°</span>
        </div>
      </div>
    </div>
  );
}
