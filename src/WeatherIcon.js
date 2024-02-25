import React from "react";
import { WeatherSvg } from "weather-icons-animated";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "sunny",
    "clear-sky-night": "clear-night",
    "few-clouds-day": "partlycloudy",
    "few-clouds-night": "cloudy",
    "scattered-clouds-day": "fog",
    "scattered-clouds-night": "fog",
    "broken-clouds-day": "cloudy",
    "broken-clouds-night": "cloudy",
    "shower-rain-day": "pouring",
    "shower-rain-night": "pouring",
    "rain-day": "rainy",
    "rain-night": "rainy",
    "thunderstorm-day": "lightning",
    "thunderstorm-night": "lightning",
    "snow-day": "snowy",
    "snow-night": "snowy",
    "mist-day": "windy-variant",
    "mist-night": "windy-variant",
  };

  return <WeatherSvg state={codeMapping[props.code]} width={85} height={85} />;
}
