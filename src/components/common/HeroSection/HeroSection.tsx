import React from "react";
import styles from "./HeroSection.module.scss";
import ScrollAnimation from "@/components/ui/ScrollAnimation/ScrollAnimation";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.companyName}>QPD</h1>
        <ScrollAnimation>
          <p className={styles.tagline}>
            ПРЕВРАТИМ ВАШУ ИДЕЮ В ЦИФРОВУЮ РЕАЛЬНОСТЬ
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default HeroSection;
