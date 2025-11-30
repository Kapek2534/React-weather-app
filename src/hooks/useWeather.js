import { useState } from "react";

export function useWeather() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchWeather(city) {
    try {
      setLoading(true);
      setError("");

      const geoFetch = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );

      const geoResponse = await geoFetch.json();

      if (!geoResponse.results || geoResponse.results.length === 0) {
        setError("City not found.");
        setLoading(false);
        return;
      }

      const { latitude, longitude, name, country } = geoResponse.results[0];

      const weatherFetch = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,wind_speed_10m,precipitation,relative_humidity_2m,apparent_temperature,weather_code&forecast_hours=8`
      );

      const weatherResponse = await weatherFetch.json();

      console.log(weatherResponse);

      setData({
        city: name,
        country: country,
        temperature: weatherResponse.current.temperature_2m,
        time: weatherResponse.current.time,
        hourly: weatherResponse.hourly,
        daily: weatherResponse.daily,
        feelsLike: weatherResponse.current.apparent_temperature,
        humidity: weatherResponse.current.relative_humidity_2m,
        wind: weatherResponse.current.wind_speed_10m,
        precipitation: weatherResponse.current.precipitation,
        currentWeatherCode: weatherResponse.current.weather_code,
      });
    } catch (err) {
      setError("Failed to fetch weather data: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, fetchWeather };
}
