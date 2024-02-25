import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="row DailyForecast">
        <div className="col">Mon</div>
        <div className="col">9%</div>
        <div className="col">🌞</div>
        <div className="col">21°</div>
        <div className="col">10°</div>
      </div>
    </div>
  );
}
