import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="./logo.svg" alt="logo pogoda" />
      </div>
      <h1>How's the sky looking today?</h1>
    </header>
  );
}
