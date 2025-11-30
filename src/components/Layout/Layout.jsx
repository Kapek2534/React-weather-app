// Styles
import styles from "./Layout.module.css";
// Components
import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import ContentSkeleton from "../Skeleton/ContentSkeleton";
// Hooks
import { useWeather } from "../../hooks/useWeather";
// Utils
import { formatDate } from "../../utils/formatDate";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import DailyForecastList from "../DailyForecast/DailyForecastList";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import { weatherIconMap } from "../../utils/weatherIcons";

export default function Layout() {
  const { data, fetchWeather, loading } = useWeather();

  const handleSearch = (city) => {
    fetchWeather(city);
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <SearchBar onSearchHandle={handleSearch} />
        {loading ? (
          <ContentSkeleton />
        ) : (
          data && (
            <div className={styles.content}>
              <div className={styles.mainColumn}>
                <CurrentWeather
                  city={data.city}
                  country={data.country}
                  date={formatDate(data.time)}
                  temperature={data.temperature}
                  icon={weatherIconMap[data.currentWeatherCode]}
                />
                <WeatherDetails
                  feelsLike={data.feelsLike}
                  humidity={data.humidity}
                  wind={data.wind}
                  precipitation={data.precipitation}
                />
                <DailyForecastList daily={data.daily} />
              </div>
              <HourlyForecast hourly={data.hourly} />
            </div>
          )
        )}
      </main>
    </div>
  );
}
