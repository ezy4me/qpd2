import React from "react";
import portfolio from "./Portfolio.module.scss";
import styles from "../page.module.scss";

import ProjectCard from "@/components/common/ProjectCard/ProjectCard";

const projects = [
  {
    id: 1,
    title: "KOREAN SIMPLE",
    description: "Создание сайта для онлайн школы по изучению корейского языка",
    workDone: [
      "Аналитика",
      "Исследование ниши",
      "Архитектура сайта",
      "Прототип",
      "Дизайн",
      "Адаптация",
      "Анимация",
    ],
    photo: "/images/project-1.jfif",
    caseLink: "/cases/korean-simple",
    tags: ["WEB", "IT"],
    time: "8 недель",
  },
  {
    id: 2,
    title: "DESIGN REINVENTED",
    description:
      "Ребрендинг и создание нового дизайна для мобильного приложения",
    workDone: [
      "Анализ пользовательского опыта",
      "Дизайн интерфейса",
      "Создание прототипов",
    ],
    photo: "/images/project-2.jfif",
    caseLink: "/cases/design-reinvented",
    tags: ["DESIGN", "UX"],
    time: "6 недель",
  },
  {
    id: 3,
    title: "APP DEVELOPMENT",
    description: "Разработка мобильного приложения для бизнеса",
    workDone: [
      "Анализ требований",
      "Разработка",
      "Тестирование",
      "Запуск приложения",
    ],
    photo: "/images/project-3.jfif",
    caseLink: "/cases/app-development",
    tags: ["APP", "DEV"],
    time: "10 недель",
  },
  {
    id: 4,
    title: "SEO OPTIMIZATION",
    description: "Комплексная SEO-оптимизация для увеличения видимости сайта",
    workDone: [
      "Анализ ключевых слов",
      "Оптимизация контента",
      "Построение ссылок",
    ],
    photo: "/images/project-4.jfif",
    caseLink: "/cases/seo-optimization",
    tags: ["SEO", "MARKETING"],
    time: "5 недель",
  },
  {
    id: 5,
    title: "BRANDING STRATEGY",
    description: "Разработка стратегии брендинга для нового продукта",
    workDone: [
      "Разработка концепции",
      "Создание фирменного стиля",
      "Презентация стратегии",
    ],
    photo: "/images/project-5.jfif",
    caseLink: "/cases/branding-strategy",
    tags: ["BRANDING", "STRATEGY"],
    time: "12 недель",
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageContent}>
        <div className={portfolio.headerContainer}>
          <h1 className={portfolio.title}>КЕЙСЫ И ПРОЕКТЫ</h1>
          <h2 className={portfolio.subtitle}>
            Портфолио студии по веб-дизайну, разработке, SEO-продвижению
          </h2>
        </div>
        <div className={portfolio.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              workDone={project.workDone}
              photo={project.photo}
              caseLink={project.caseLink}
              tags={project.tags}
              time={project.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
