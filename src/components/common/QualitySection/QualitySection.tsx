"use client";

import React from "react";
import { MdGppGood } from "react-icons/md";
import { SiSpeedtest } from "react-icons/si";
import { PiUsersThreeFill } from "react-icons/pi";
import styles from "./QualitySection.module.scss";

const QualitySection: React.FC = () => {
  return (
    <section className={styles.qualitySection}>
      <div className="container">
        <h2 className={styles.title}>Почему выбирают нас</h2>
        <div className={styles.items}>
          <div className={styles.item}>
            <MdGppGood className={styles.icon} />
            <h3 className={styles.itemTitle}>Качество</h3>
            <p className={styles.description}>
              Мы гарантируем высокий стандарт качества во всех аспектах нашей
              работы, от дизайна до разработки.
            </p>
          </div>
          <div className={styles.item}>
            <SiSpeedtest className={styles.icon} />
            <h3 className={styles.itemTitle}>Скорость</h3>
            <p className={styles.description}>
              Наши решения разрабатываются и внедряются быстро, чтобы вы могли
              быстрее достичь своих целей.
            </p>
          </div>
          <div className={styles.item}>
            <PiUsersThreeFill className={styles.icon} />
            <h3 className={styles.itemTitle}>Команда</h3>
            <p className={styles.description}>
              Наша команда состоит из профессионалов с богатым опытом, готовых
              предложить лучшие решения для вашего бизнеса.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
