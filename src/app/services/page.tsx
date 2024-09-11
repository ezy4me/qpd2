import React from "react";
import styles from "../page.module.scss";
import { ServicesGrid } from "@/components/common/ServicesGrid/ServicesGrid";

const Services: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageContent}>
        <ServicesGrid/>
      </div>
    </div>
  );
};

export default Services;
