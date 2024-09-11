import HeroSection from "@/components/common/HeroSection/HeroSection";
import styles from "./page.module.scss";
import { ProjectsGrid } from "@/components/common/ProjectsGrid/ProjectsGrid";
import FAQ from "@/components/common/FAQ/FAQ";
import QualitySection from "@/components/common/QualitySection/QualitySection";
import RequestSection from "@/components/common/RequestSection/RequestSection";
import PopularCases from "@/components/common/PopularCases/PopularCases";
import TeamSection from "@/components/common/TeamSection/TeamSection";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection />
        <QualitySection />
        <ProjectsGrid />
        <PopularCases />
        <TeamSection />
        <RequestSection />
        <FAQ />
      </main>
    </div>
  );
}
