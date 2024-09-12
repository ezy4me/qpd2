import React from "react";
import styles from "../../page.module.scss";
import ProjectInfo from "@/components/common/ProjectInfo/ProjectInfo";
import RequestSection from "@/components/common/RequestSection/RequestSection";

const Portfolio: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageContent}>
          <ProjectInfo/>
          <RequestSection/>
      </div>
    </div>
  );
};

export default Portfolio;
