// PopularCases.tsx

import React from "react";
import styles from "./PopularCases.module.scss";
import Button from "@/components/ui/Button/Button";

const popularCasesData = [
  {
    title: "Сайт-визитка",
    description:
      "Создайте профессиональное первое впечатление с нашим сайтом-визиткой.",
    price: "от 100 000 ₽",
    time: "2-4 недели",
    detailedDescription:
      "Простое, стильное и информативное решение, идеально подходящее для представления вашей компании или услуг онлайн.",
  },
  {
    title: "Лэндинг",
    description:
      "Привлеките внимание и увеличьте конверсии с помощью нашего лендинга.",
    price: "от 40 000 ₽",
    time: "1-2 недели",
    detailedDescription:
      "Эффективно структурированная страница, созданная для продвижения одного продукта или услуги и максимально удобная для посетителей.",
  },
  {
    title: "Интернет-магазин",
    description: "Откройте ваш онлайн-магазин с нашей помощью.",
    price: "от 200 000 ₽",
    time: "4-6 недель",
    detailedDescription:
      "Мы разработаем удобную и функциональную платформу для продажи товаров, включая интеграцию с платежными системами и управление заказами.",
  },
];

const PopularCases = () => {
  return (
    <div className={styles.popular}>
      <h2 className={styles.title}>Популярное</h2>
      <div className={styles.container}>
        <div className={styles.list}>
          {popularCasesData.map((caseItem, index) => (
            <div key={index} className={styles.listItem}>
              <div className={styles.card}>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{caseItem.title}</h3>
                  <div className={styles.cardActions}>
                    <Button size="large" variant="outlined">
                      Хочу
                    </Button>
                    <div className={styles.cardTime}>
                      <p>{caseItem.price}</p>
                      <p>{caseItem.time}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.cardDivider}></div>
                <div className={styles.cardDescription}>
                  <p className={styles.description}>{caseItem.description}</p>
                  <p className={styles.description}>
                    {caseItem.detailedDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCases;
