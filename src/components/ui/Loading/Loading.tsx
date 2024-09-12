import React from "react";
import styles from "./Loading.module.scss";
import BackgroundLines from "@/components/common/BackgroundLines/BackgroundLines";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <BackgroundLines />
      <div className={styles["loading-text"]}>
        <span className={styles["loading-text-words"]}>L</span>
        <span className={styles["loading-text-words"]}>O</span>
        <span className={styles["loading-text-words"]}>A</span>
        <span className={styles["loading-text-words"]}>D</span>
        <span className={styles["loading-text-words"]}>I</span>
        <span className={styles["loading-text-words"]}>N</span>
        <span className={styles["loading-text-words"]}>G</span>
      </div>
    </div>
  );
};

export default Loading;
