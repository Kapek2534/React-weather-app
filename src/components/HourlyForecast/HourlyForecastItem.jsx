import { weatherIconMap } from "../../utils/weatherIcons";
import styles from "./HourlyForecastItem.module.css";

export default function HourlyForecastItem({ time, temperature, weatherCode }) {
  const icon = weatherIconMap[weatherCode];

  return (
    <div className={styles.hourlyForecastItem}>
      <div className={styles.hourlyTimeAndIcon}>
        <div className={styles.hourlyIconBox}>
          <img src={icon} alt="weather icon" />
        </div>
        <span>{time}</span>
      </div>
      <span className={styles.hourlyTemperature}>{temperature}°</span>
    </div>
  );
}
