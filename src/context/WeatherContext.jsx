import React, { createContext, useContext, useEffect, useState } from "react";
import citiesData from "../cities.json";
import { getWeather } from "../utils/getWeather";
import { getLocation } from "../utils/getLocation";

const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const searchCityData =
    cityName?.value &&
    citiesData.find(
      (cityData) =>
        cityData.il_adi.toLowerCase() === cityName.value.toLowerCase()
    );

  useEffect(() => {
    getWeatherData();
  }, [searchCityData]);

  async function getWeatherData() {
    try {
      if (searchCityData) {
        const weather = await getWeather(
          searchCityData.lat,
          searchCityData.lon
        );
        setWeatherData(weather);
      } else {
        const location = await getLocation();
        const ipWeather = await getWeather(
          location?.location?.latitude,
          location?.location?.longitude
        );
        setWeatherData(ipWeather);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <WeatherContext.Provider
      value={{
        cityName,
        setCityName,
        weatherData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
