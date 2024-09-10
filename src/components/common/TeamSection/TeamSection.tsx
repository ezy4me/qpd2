"use client";

import React from "react";
import styles from "./TeamSection.module.scss";

interface TeamMember {
  name: string;
  role: string;
  photo?: string;
  bio?: string;
}

interface TeamSectionProps {
  members: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ members }) => {
  return (
    <section className={styles.teamSection}>
      <h2 className={styles.title}>Наша команда</h2>
      <div className={styles.members}>
        {members.map((member, index) => (
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
    </section>
  );
};

export default TeamSection;
