import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather Container">
      <form>
        <input type="search" placeholder="Enter a city..."></input>
        <input type="submit" value="Search"></input>
      </form>
      <div className="CurrentWeatherData">
        <h1>Lisbon</h1>
        <ul>
          <li>Tempertature:</li>
          <li>Description:</li>
          <li>Humidity:</li>
          <li>Wind:</li>
          <li>Icon</li>
        </ul>
      </div>
    </div>
  );
}
