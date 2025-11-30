import styles from "./WeatherDetails.module.css";

import WeatherDetailsCard from "./WeatherDetailsCard";

export default function WeatherDetails({
  feelsLike,
  humidity,
  wind,
  precipitation,
}) {
  return (
    <div className={styles.weatherDetailsList}>
      <WeatherDetailsCard value={`${feelsLike}°C`}>
        Feels Like
      </WeatherDetailsCard>
      <WeatherDetailsCard value={`${humidity}%`}>Humidity</WeatherDetailsCard>
      <WeatherDetailsCard value={`${wind} km/h`}>Wind</WeatherDetailsCard>
      <WeatherDetailsCard value={`${precipitation} mm`}>
        Precipitation
      </WeatherDetailsCard>
    </div>
  );
}
