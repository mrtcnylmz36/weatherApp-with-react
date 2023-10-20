import React from "react";
import { useWeather } from "../context/WeatherContext";
import "./styles.css";

function Card() {
  const { weatherData: data } = useWeather();
  const weekday = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Pazar",
  ];
  const date = new Date(data?.dt * 1000).toLocaleDateString();
  const day = new Date(data?.dt * 1000).getDay();
  const iconUrl = `https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`;
  const tempSearch = data?.main.temp.toString().indexOf(".");
  const temp = data?.main.temp.toString().slice(0, tempSearch);

  if (!data) {
    return <h1>Loading..</h1>;
  }

  return (
    <div className="card-container">
      <div className="card-heading-name">
        <h1>{data?.name}</h1>
      </div>
      <div className="card-heading-date">
        <h1>{weekday[day]}</h1>
        <p>{date}</p>
      </div>
      <div className="card-header">
        <img src={iconUrl} alt="icon" />
        <h2 className="temp">{temp} °C</h2>
        <div className="feels">
          <p>{data?.weather[0].description}</p>
          <span>
            <b>Hissedilen: </b>
            {data?.main.feels_like} °C
          </span>
        </div>
      </div>
      <div className="card-footer">
        <div className="footer-elements">
          <h3>Rüzgar</h3>
          <span>
            <b>Yön: </b>
            {data?.wind.deg}°
          </span>
          <span>
            <b>Hız: </b>
            {data?.wind.speed} km/s
          </span>
        </div>
        <div className="footer-elements">
          <h3>Max Sıcaklık</h3>
          <span>{data?.main.temp_max}°C</span>
        </div>
        <div className="footer-elements">
          <h3>Min Sıcaklık</h3>
          <span>{data?.main.temp_min}°C</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
