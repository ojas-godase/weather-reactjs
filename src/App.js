import "./App.css";
import Grid from "./components/Grid";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState();
  const [img, setImg] = useState("images/cloud.png");
  function Img(text, time) {
    if (text.includes("cloud") || text.includes("overcast")) {
      setImg("images/overcast.png");
    } else if (text.includes("rain")) {
      setImg("images/heavy-rain.png");
      console.log(img);
    } else if (text.includes("sun")) {
      setImg("images/sunny.png");
    } else if (text.includes("clear")) {
      if (time >= 7 && time <= 7) {
        setImg("images/clear.png");
      } else {
        setImg("images/clear-night (1).png");
      }
    } else if (text.includes("snow")) {
      setImg("images/snowing.png");
    } else {
      setImg("images/cloud.png");
    }
  }
  async function getData(city) {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=a8ae74a7e4c147c4b54174738242401&q=${city}&aqi=no`
    );
    const data = await res.json();
    if (data.error) {
      setData();
    } else {
      setData(data);
      Img(
        data.current.condition.text.toLowerCase(),
        data.current.last_updated.slice(11, 13)
      );
    }
  }
  const [city, setCity] = useState("London");
  function handleSearch(value) {
    setCity(value);
  }
  useEffect(() => {
    getData(city);
  }, [city]);

  return (
    <div className="container">
      <div className="App">
        <NavBar handleSearch={handleSearch} />
        {data ? (
          <div>
            <Main
              icon={img}
              location={data.location.name}
              temp={`${Math.floor(data.current.temp_c)}°C`}
              condition={data.current.condition.text}
            />
            <div className="row row1">
              <Grid
                img="images/thermometer.png"
                text="Real Feel"
                info={`${Math.floor(data.current.feelslike_c)}°C`}
              />
              <Grid
                img="images/droplet.png"
                text="Precipitation"
                info={`${Math.floor(data.current.precip_mm)} mm`}
              />
            </div>
            <div className="row row2">
              <Grid
                img="images/uv.png"
                text="UV Index"
                info={data.current.uv}
              />
              <Grid
                img="images/humidity.png"
                text="Humidity"
                info={`${Math.floor(data.current.humidity)} %`}
              />
            </div>
            <div className="row row3">
              <Grid
                img="images/wind.png"
                text="Wind"
                info={`${Math.floor(data.current.wind_kph)} kph`}
              />
              <Grid
                img="images/pressure.png"
                text="Pressure"
                info={`${Math.floor(data.current.pressure_mb)} mb`}
              />
            </div>
          </div>
        ) : (
          <div className="error">Oops!!! City not found</div>
        )}
      </div>
    </div>
  );
}
