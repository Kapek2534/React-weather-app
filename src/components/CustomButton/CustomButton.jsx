import styles from "./CustomButton.module.css";

export default function CustomButton({ children, onClick }) {
  return (
    <button className={styles.customButton} onClick={onClick}>
      {children}
    </button>
  );
}
