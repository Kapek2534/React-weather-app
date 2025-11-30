import styles from "./DailyForecastList.module.css";

import DailyForecastItem from "./DailyForecastItem";

import { formatWeekday } from "../../utils/formatDate";

export default function DailyForecastList({ daily }) {
  return (
    <>
      <h2>Daily forecast</h2>
      <div className={styles.dailyForecastList}>
        {daily.time.map((day, index) => (
          <DailyForecastItem
            key={day}
            weekday={formatWeekday(daily.time[index])}
            weatherCode={daily.weather_code[index]}
            minTemp={daily.temperature_2m_min[index]}
            maxTemp={daily.temperature_2m_max[index]}
          />
        ))}
      </div>
    </>
  );
}
