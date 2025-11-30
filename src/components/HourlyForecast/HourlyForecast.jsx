import styles from "./HourlyForecast.module.css";

import HourlyForecastItem from "./HourlyForecastItem";

import { formatHour } from "../../utils/formatDate";

export default function HourlyForecast({ hourly }) {
  return (
    <div className={styles.hourlyForecast}>
      <h2>Hourly forecast</h2>
      <div className={styles.hourlyForecastList}>
        {hourly.time.map((hour, index) => (
          <HourlyForecastItem
            key={hour}
            time={formatHour(hourly.time[index])}
            temperature={hourly.temperature_2m[index]}
            weatherCode={hourly.weather_code[index]}
          />
        ))}
      </div>
    </div>
  );
}
