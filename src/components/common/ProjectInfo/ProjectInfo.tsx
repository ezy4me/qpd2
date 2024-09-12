"use client";

import React from "react";
import styles from "./ProjectInfo.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ScrollAnimation from "@/components/ui/ScrollAnimation/ScrollAnimation";

const ProjectInfo: React.FC = () => {
  return (
    <div className={styles.projectInfo}>
      <div className="title">INSPIRATION</div>
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.technologies}>
            <div className={styles.technologiesItem}>REACT</div>
            <div className={styles.technologiesItem}>POSTGRESQL</div>
            <div className={styles.technologiesItem}>PYTHON FAST API</div>
            <div className={styles.technologiesItem}>EXCLUSIVE DESIGN</div>
          </div>
          <div className={styles.price}>
            <p className={styles.priceText}>
              от 100 000 <span>₽</span>
            </p>
            <p className={styles.time}>8 недель</p>
          </div>
        </div>
        <div className={styles.tags}>
          <div className={styles.tag}>WEB</div>
          <div className={styles.tag}>IT</div>
        </div>
        <div className={styles.description}>
          <p className={styles.text}>
            <span>Цель проекта:</span>
          </p>
          <p className={styles.text}>
            Вдохновить и стимулировать креативность, помогая пользователям
            находить и реализовывать свои идеи через инновационные и эстетичные
            решения.
          </p>
          <p className={styles.text}>
            <span>Описание:</span>
          </p>
          <p className={styles.text}>
            Проект Inspiration — это источник мотивации и креативности для
            людей, стремящихся реализовать свои идеи и добиться успеха. Мы
            создаем платформу, где каждая деталь будет призвана вдохновлять и
            поддерживать пользователей на их пути.
          </p>
        </div>
        <ScrollAnimation>
          <div className={styles.projectImages}>
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className={styles.mySwiper}>
              <SwiperSlide
                className={styles.projectImage}
                style={{ backgroundImage: "url('/images/project-5.jfif')" }}
              />
              <SwiperSlide
                className={styles.projectImage}
                style={{ backgroundImage: "url('/images/project-2.jfif')" }}
              />
              <SwiperSlide
                className={styles.projectImage}
                style={{ backgroundImage: "url('/images/project-3.jfif')" }}
              />
              <SwiperSlide
                className={styles.projectImage}
                style={{ backgroundImage: "url('/images/project-4.jfif')" }}
              />
            </Swiper>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default ProjectInfo;
