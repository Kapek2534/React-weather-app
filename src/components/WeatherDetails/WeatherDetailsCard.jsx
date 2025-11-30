import styles from "./WeatherDetailsCard.module.css";

export default function WeatherDetailsCard({ children, value }) {
  return (
    <div className={styles.weatherDetailsCard}>
      <span>{children}</span>
      <span>{value}</span>
    </div>
  );
}
