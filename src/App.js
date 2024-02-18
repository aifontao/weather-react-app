import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather app</h1>
        <Weather />
        <footer>
          This react app was coded by{" "}
          <a
            href="https://ana-fontao-portfolio.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Ana Fontão
          </a>
          , it's opensourced on{" "}
          <a
            href="https://github.com/aifontao/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://weather-react-app-aif.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
