import { weatherIconMap } from "../../utils/weatherIcons";
import styles from "./DailyForecastItem.module.css";

export default function DailyForecastItem({
  weekday,
  weatherCode,
  minTemp,
  maxTemp,
}) {
  const icon = weatherIconMap[weatherCode];

  return (
    <div className={styles.dailyForecastItem}>
      <span>{weekday}</span>
      <div className={styles.dailyIcon}>
        <img src={icon} alt="weather icon" />
      </div>
      <div className={styles.temperatures}>
        <span>{minTemp}°</span>
        <span>{maxTemp}°</span>
      </div>
    </div>
  );
}
