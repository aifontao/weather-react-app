import React from "react";

export default function FormattedDate(props) {
  let weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let weekDay = weekDays[props.data.getDay()];
  let day = props.data.getDate();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[props.data.getMonth()];
  let year = props.data.getFullYear();

  let hours = props.data.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.data.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="mt-3">
      <small>
        Updated ▫ {weekDay}, {day} {month} {year} | {hours}:{minutes}
      </small>
    </div>
  );
}
