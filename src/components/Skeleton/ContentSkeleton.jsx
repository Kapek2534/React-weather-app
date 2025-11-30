import styles from "./ContentSkeleton.module.css";

export default function ContentSkeleton() {
  return (
    <div className={styles.content} aria-hidden>
      <div className={styles.mainColumn}>
        <div className={styles.card}>
          <div className={styles.row}></div>
          <div className={styles.block} />
          <div className={styles.smallBlocks}>
            <div className={styles.small} />
            <div className={styles.small} />
            <div className={styles.small} />
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.lineLong} />
          <div className={styles.lineLong} />
          <div className={styles.lineShort} />
        </div>

        <div className={styles.card}>
          <div className={styles.lineLong} />
          <div className={styles.lineLong} />
          <div className={styles.lineLong} />
        </div>
      </div>

      <aside className={styles.sidebar}>
        <div className={styles.card}>
          <div className={styles.titleLine} />
          <div className={styles.list}>
            {Array.from({ length: 8 }).map((_, i) => (
              <div className={styles.listItem} key={i}>
                <div className={styles.circle} />
                <div className={styles.lineShort} />
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
