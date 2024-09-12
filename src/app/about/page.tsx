import React from "react";
import styles from "../page.module.scss";
import about from "./About.module.scss";
import FAQ from "@/components/common/FAQ/FAQ";
import RequestSection from "@/components/common/RequestSection/RequestSection";
import { OurFeatures } from "@/components/common/OurFeatures/OurFeatures";
import TeamSection from "@/components/common/TeamSection/TeamSection";

const About: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageContent}>
        <div className={about.headerContainer}>
          <h1 className="title">СТУДИЯ QUALITY PRODUCT DESIGN</h1>
          <h2 className={about.subtitle}>
            ДОБРО ПОЖАЛОВАТЬ В <span> QUALITY PRODUCT DESIGN</span> — СТУДИЮ,
            ГДЕ <span>СТРАСТЬ К ДИЗАЙНУ</span> И СТРЕМЛЕНИЕ К СОВЕРШЕНСТВУ
            ПРЕВРАЩАЮТ ИДЕИ В РЕАЛЬНЫЕ, <span>ВПЕЧАТЛЯЮЩИЕ ПРОДУКТЫ.</span>
          </h2>
          <h2 className={about.subtitle}>
            <span> МЫ — КОМАНДА ПРОФЕССИОНАЛОВ</span> , ОБЪЕДИНЕННЫХ ЛЮБОВЬЮ К
            КАЧЕСТВЕННОМУ И ИННОВАЦИОННОМУ ДИЗАЙНУ, И МЫ ГОТОВЫ ВОПЛОТИТЬ ВАШИ
            ИДЕИ В ЖИЗНЬ.
          </h2>
        </div>
        <OurFeatures />
        <TeamSection />
        <RequestSection />
        <FAQ />
      </div>
    </div>
  );
};

export default About;
