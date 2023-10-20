import { useWeather } from "../context/WeatherContext";
import { getWeather } from "../utils/getWeather";
import { getLocation } from "../utils/getLocation";
import React, { useState, useEffect } from "react";

const getWeatherData = async () => {
  const [weatherData, setWeatherData] = useState(null);
  const { locationData } = useWeather();
  async function getWeatherData() {
    try {
      if (locationData) {
        const weather = await getWeather(locationData.lat, locationData.lon);
        console.log("normalWeather", weather);
        setWeatherData(weather);
      } else {
        const location = await getLocation();
        const ipWeather = await getWeather(
          location?.location?.latitude,
          location?.location?.longitude
        );
        setWeatherData(ipWeather);
        console.log("ipWeather", ipWeather);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getWeatherData();
  }, [locationData]);
};

export default getWeatherData;
