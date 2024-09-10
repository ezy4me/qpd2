import React from "react";
import styles from "../page.module.scss";

const About: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageContent}>
        <h1>About</h1>
      </div>
    </div>
  );
};

export default About;
