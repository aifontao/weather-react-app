import React from "react";
import axios from "axios";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Enter a city..."></input>
        <input type="submit" value="Search"></input>
      </form>
      <p>The currente weather is 19C</p>
    </div>
  );
}
