import HeroSection from "@/components/common/HeroSection/HeroSection";
import styles from "./page.module.scss";
import BackgroundLines from "@/components/common/BackgroundLines/BackgroundLines";
import { ProjectsGrid } from "@/components/common/ProjectsGrid/ProjectsGrid";
import FAQ from "@/components/common/FAQ/FAQ";
import QualitySection from "@/components/common/QualitySection/QualitySection";
import RequestSection from "@/components/common/RequestSection/RequestSection";
import PopularCases from "@/components/common/PopularCases/PopularCases";
import TeamSection from "@/components/common/TeamSection/TeamSection";

const teamMembers = [
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

export default function Home() {
  return (
    <div className={styles.page}>
      <BackgroundLines />
      <main className={styles.main}>
        <HeroSection />
        <QualitySection />
        <ProjectsGrid />
        <PopularCases />
        <TeamSection members={teamMembers} />
        <RequestSection />
        <FAQ />
      </main>
    </div>
  );
}
