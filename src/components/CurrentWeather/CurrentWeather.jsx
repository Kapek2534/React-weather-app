import styles from "./CurrentWeather.module.css";

export default function CurrentWeather({
  city,
  country,
  temperature,
  icon,
  date,
}) {
  return (
    <div className={styles.currentWeatherCard}>
      <div className={styles.location}>
        <span>
          {city}, {country}
        </span>
        <span>{date}</span>
      </div>
      <div className={styles.temperature}>
        <div className={styles.iconBox}>
          <img src={icon} alt="weather icon" />
        </div>
        <span>{temperature}°C</span>
      </div>
    </div>
  );
}
