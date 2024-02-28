import React from "react";

export default function WeatherDayWidgets(props) {
  return (
    <div className="WeatherDayWidgets">
      <div className="row">
        <div className="col CurrentWeatherWidgets">
          <i className="fa-solid fa-temperature-half fa-xl m-3"></i>
          <div>{props.data.feelsLike}°C</div>
          <small>Feels like</small>
        </div>
        <div className="col CurrentWeatherWidgets">
          <i className="fa-solid fa-droplet fa-xl m-3"></i>
          <div>{props.data.humidity}%</div>
          <small>Humidity</small>
        </div>
        <div className="col CurrentWeatherWidgets">
          <i className="fa-solid fa-wind fa-xl m-3"></i>
          <div>{props.data.wind} km/h</div>
          <small>Wind</small>
        </div>
        <div className="col CurrentWeatherWidgets">
          <i className="fa-brands fa-cloudscale fa-solid fa-xl m-3"></i>
          <div>{props.data.pressure} bar</div>
          <small>Pressure</small>
        </div>
      </div>
    </div>
  );
}
