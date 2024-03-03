import React from "react";
import "./WeatherDayWidgets.css";

export default function WeatherDayWidgets(props) {
  return (
    <div className="WeatherDayWidgets">
      <div>
        <div className="CurrentWeatherWidgets CurrentWeatherWidgetsTop">
          <i className="fa-solid fa-temperature-high fa-xl mb-3"></i>
          <div>{props.data.maxTemperature}°C</div>
        </div>
        <div className="CurrentWeatherWidgets ">
          <i className="fa-solid fa-temperature-low fa-xl"></i>
          <div>{props.data.minTemperature}°C</div>
        </div>
      </div>

      <div>
        <div className="CurrentWeatherWidgets CurrentWeatherWidgetsTop">
          <i className="fa-solid fa-droplet fa-xl mb-3"></i>
          <div>{props.data.humidity}%</div>
        </div>
        <div className="CurrentWeatherWidgets">
          <i className="fa-solid fa-wind fa-xl"></i>
          <div>{props.data.wind} km/h</div>
        </div>
      </div>
    </div>
  );
}
