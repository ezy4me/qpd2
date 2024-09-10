import styles from "./BackgroundLines.module.scss";

const BackgroundLines = () => {
  const lines = new Array(23).fill(null); 

  return (
    <div className={styles["absolute-lines-wrapper"]}>
      <div className={styles["absolute-lines"]}>
        {lines.map((_, index) => (
          <div
            key={index}
            className={styles["absolute-lines__item"]}
            style={{ animationDelay: `${index * 0.2}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundLines;
