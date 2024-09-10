"use client";

import React from "react";
import FAQItem from "./FAQItem";
import styles from "./FAQ.module.scss";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Какие услуги предлагает ваша веб-студия?",
      answer:
        "Мы предоставляем полный спектр услуг по разработке сайтов, включая UI/UX дизайн, веб-дизайн, SEO оптимизацию, хостинг и техническую поддержку.",
    },
    {
      question: "Сколько времени занимает разработка сайта?",
      answer:
        "Сроки разработки зависят от сложности проекта, но обычно это занимает от 2 до 6 недель.",
    },
    {
      question: "Какие технологии вы используете?",
      answer:
        "Мы используем современные технологии, такие как React, Next.js, Node.js, а также популярные CMS, такие как WordPress и Drupal.",
    },
    {
      question: "Как проходит процесс работы над проектом?",
      answer:
        "Процесс работы включает несколько этапов: сбор требований, разработка дизайна, разработка сайта, тестирование и запуск, а также последующая поддержка.",
    },
  ];

  return (
    <div className={styles.faq}>
      <div className={styles.container}>
        <h2>
          Часто задаваемые <span>вопросы</span>
        </h2>
        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
