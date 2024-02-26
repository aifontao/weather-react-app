import React, { useState } from "react";

export default function CurrentTemperature(props) {
  const [temperature, setTemperature] = useState(props.celsiusTemperature);
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
    setTemperature(props.celsiusTemperature);
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
    setTemperature(Math.round(temperature * 1.8 + 32));
  }

  if (unit === "celsius") {
    return (
      <li className="CurrentTemperature">
        <span className="CurrentTemperatureValue">
          {props.celsiusTemperature}
        </span>
        <span className="Units">
          <strong> °C </strong>
          <a href="/" onClick={showFahrenheit}>
            |°F
          </a>
        </span>
      </li>
    );
  } else {
    return (
      <li className="CurrentTemperature">
        <span className="CurrentTemperatureValue">{temperature}</span>
        <span className="Units">
          <strong> °F </strong>
          <a href="/" onClick={showCelsius}>
            |°C
          </a>{" "}
        </span>
      </li>
    );
  }
}
