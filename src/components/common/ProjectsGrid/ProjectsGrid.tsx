"use client";

import React from "react";
import { useRouter } from "next/navigation";
import styles from "./ProjectsGrid.module.scss";
import Button from "@/components/ui/Button/Button";
import ScrollAnimation from "@/components/ui/ScrollAnimation/ScrollAnimation";

const projects = [
  {
    id: 1,
    image: "/images/project-1.jfif",
    tags: ["WEB", "IT"],
    time: "8 недель",
  },
  {
    id: 2,
    image: "/images/project-2.jfif",
    tags: ["DESIGN", "UX"],
    time: "6 недель",
  },
  {
    id: 3,
    image: "/images/project-3.jfif",
    tags: ["APP", "DEV"],
    time: "10 недель",
  },
  {
    id: 4,
    image: "/images/project-4.jfif",
    tags: ["SEO", "MARKETING"],
    time: "5 недель",
  },
  {
    id: 5,
    image: "/images/project-5.jfif",
    tags: ["BRANDING", "STRATEGY"],
    time: "12 недель",
  },
];

export const ProjectsGrid: React.FC = () => {
  const router = useRouter();

  const handleViewProject = (id: number) => {
    router.push(`/portfolio/${id}`);
  };

  return (
    <section className={styles.container}>
      <ScrollAnimation scaleRange={[.95, 1]}>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={styles.project}
              style={{ backgroundImage: `url(${project.image})` }}>
              <div className={styles.info}>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <div key={tag} className={styles.tag}>
                      {tag}
                    </div>
                  ))}
                </div>
                <div className={styles.actions}>
                  <p className={styles.time}>{project.time}</p>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => handleViewProject(project.id)}>
                    Смотреть
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
};
