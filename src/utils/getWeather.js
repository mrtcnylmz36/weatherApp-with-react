const WEATHER_API_KEY = "403ae1e5b0dfce0082a69b175441735e";

const getWeather = async (lat, lon) => {
  const lang = navigator.language.split("-")[0];
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&lang=${lang}&units=metric`;

  const sevenDayApi = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=7&appid=${WEATHER_API_KEY}`;

  const res = await fetch(api);
  if (!res.ok) {
    throw {
      message: res.statusText,
    };
  }
  return res.json();
};

export { getWeather };
