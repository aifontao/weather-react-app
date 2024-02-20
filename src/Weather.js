import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState();
  const [loaded, setLoaded] = useState();
  const [forecast, setForecast] = useState();

  function showForecast(response) {
    setLoaded(true);
    console.log(response);
    setForecast({
      cityName: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "aof4801f27bc8e543a47a5fc535tf9b8";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showForecast);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9 ps-0">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            onChange={updateCity}
          ></input>
        </div>
        <div className="col-3 p-0">
          <input type="submit" value="Search" className="button"></input>
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="Weather">
        {form}
        <div className="CurrentWeatherData">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="row">
                <div className="col-5 p-0">
                  <img
                    src={forecast.icon}
                    alt={forecast.description}
                    className="CurrentIcon"
                  ></img>
                </div>
                <div className="col-7">
                  <ul className="CurrentWeatherDetails">
                    <li>
                      <span className="CurrentTemperature">
                        {forecast.temperature}
                      </span>{" "}
                      <span className="Units"> °C</span>
                    </li>
                    <li className="Description">Feels like 14°C</li>
                    <li className="Description">{forecast.description}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-7">
              <ul className="CurrentCityDetails">
                <li>
                  <h1>{forecast.cityName}</h1>
                </li>
                <li>
                  <h2>Country</h2>
                </li>
                <li className="DateDetails ">Sunday, 18 Feb 2024 📅</li>
                <li className="DateDetails">20:04 🕐</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="TomorrowProspects">
          <ul>
            <li>
              <strong>Prospects for tomorrow</strong>
            </li>
            <li>Sobretudo sol - Maxima de 21</li>
          </ul>
        </div>

        <div className="row">
          <div className="col-6 Forecast">
            <div className="row DailyForecast">
              <div className="col-3">Mon</div>
              <div className="col-3">💧9%</div>
              <div className="col-2">🌞</div>
              <div className="col-2">21°</div>
              <div className="col-2">10°</div>
            </div>
            <div className="row DailyForecast">
              <div className="col-3">Tue</div>
              <div className="col-3">💧9%</div>
              <div className="col-2">🌞</div>
              <div className="col-2">21°</div>
              <div className="col-2">10°</div>
            </div>
            <div className="row DailyForecast">
              <div className="col-3">Wed</div>
              <div className="col-3">💧9%</div>
              <div className="col-2">🌞</div>
              <div className="col-2">21°</div>
              <div className="col-2">10°</div>
            </div>
            <div className="row DailyForecast">
              <div className="col-3">Fri</div>
              <div className="col-3">💧9%</div>
              <div className="col-2">🌞</div>
              <div className="col-2">21°</div>
              <div className="col-2">10°</div>
            </div>
            <div className="row DailyForecast">
              <div className="col-3">Sat</div>
              <div className="col-3">💧9%</div>
              <div className="col-2">🌞</div>
              <div className="col-2">21°</div>
              <div className="col-2">10°</div>
            </div>
          </div>
          <div className="col-6 ">
            <div className="row">
              <div className="col-5 CurrentWeatherWidgets">
                LOGO
                <br />
                20
                <br />
                Max temp
              </div>
              <div className="col-5 CurrentWeatherWidgets">
                LOGO
                <br />
                -10
                <br />
                Min temp
              </div>
            </div>
            <div className="row">
              <div className="col-5 CurrentWeatherWidgets">
                LOGO
                <br />
                Humidity <br />
                {forecast.humidity} %
              </div>
              <div className="col-5 CurrentWeatherWidgets">
                LOGO
                <br />
                Wind <br />
                {forecast.wind} km/h
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
