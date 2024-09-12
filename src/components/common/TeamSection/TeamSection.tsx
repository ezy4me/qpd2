"use client";

import React from "react";
import styles from "./TeamSection.module.scss";
import ScrollAnimation from "@/components/ui/ScrollAnimation/ScrollAnimation";

interface TeamMember {
  name: string;
  role: string;
  photo?: string;
  bio?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Алиса Джонсон",
    role: "Ведущий разработчик",
    photo: "/images/panda-bear.png",
    bio: "Алиса имеет более 10 лет опыта в разработке программного обеспечения и специализируется на фронтенд-технологиях.",
  },
  {
    name: "Боб Смит",
    role: "Бэкенд-разработчик",
    photo: "/images/dinosaur.png",
    bio: "Боб является экспертом в серверных технологиях и обладает солидным опытом в создании масштабируемых систем.",
  },
  {
    name: "Чарли Браун",
    role: "UI/UX дизайнер",
    photo: "/images/bird.png",
    bio: "Чарли сосредоточен на создании интуитивно понятных и привлекательных пользовательских интерфейсов с острым взглядом на дизайн.",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className={styles.teamSection}>
      <h2 className="title">Наша команда</h2>
      <ScrollAnimation>
        <div className={styles.members}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.memberCard}>
              {member.photo && (
                <img
                  className={styles.photo}
                  src={member.photo}
                  alt={member.name}
                />
              )}
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              {member.bio && <p className={styles.bio}>{member.bio}</p>}
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default TeamSection;
