import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.scss";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import BackgroundLines from "@/components/common/BackgroundLines/BackgroundLines";

export const metadata: Metadata = {
  title: "Quality Product Design - Студия инновационного веб-дизайна",
  description:
    "Добро пожаловать в Quality Product Design, студию, которая превращает идеи в уникальные цифровые решения. Мы специализируемся на создании инновационных и эффективных веб-дизайнов, которые помогают бизнесам выделяться в цифровом мире. Наш подход сочетает креативность и техническое мастерство для достижения выдающихся результатов.",
};

const interTight = Inter_Tight({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interTight.className}>
        <Header />

        <BackgroundLines />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
