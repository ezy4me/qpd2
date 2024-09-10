import React from "react";
import styles from "./ProjectCard.module.scss";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  workDone: string[];
  photo: string;
  caseLink: string;
  tags: string[];
  time: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  workDone,
  photo,
  caseLink,
  tags,
  time,
}) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <img src={photo} alt={title} className={styles.projectImage} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        <div className={styles.workDoneContainer}>
          {workDone.map((item, index) => (
            <div key={index} className={styles.workDoneItem}>
              {item}
            </div>
          ))}
        </div>
        <p className={styles.projectTime}>Время выполнения: {time}</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <Link href={caseLink} className={styles.viewCaseButton}>
          Посмотреть кейс
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
