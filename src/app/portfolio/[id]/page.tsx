import React from "react";
import styles from "../../page.module.scss";
import ProjectInfo from "@/components/common/ProjectInfo/ProjectInfo";

const Portfolio: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageContent}>
          <ProjectInfo/>
      </div>
    </div>
  );
};

export default Portfolio;
