import React from "react";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.companyName}>QPD</h1>
        <p className={styles.tagline}>
          ПРЕВРАТИМ ВАШУ ИДЕЮ В ЦИФРОВУЮ РЕАЛЬНОСТЬ
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
