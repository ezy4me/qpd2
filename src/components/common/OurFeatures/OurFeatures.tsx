import Image from "next/image";
import styles from "./OurFeatures.module.scss";

export const OurFeatures = () => {
  const features = [
    {
      title: "UI/UX",
      description:
        "Мы создаем интуитивно понятные и эстетически привлекательные пользовательские интерфейсы.",
      image: "/images/about/uiux.png",
    },
    {
      title: "DESIGN",
      description:
        "Мы разрабатываем креативные и визуально привлекательные дизайны, которые подчеркивают уникальность вашего бренда.",
      image: "/images/about/design.png",
    },
    {
      title: "SEO",
      description:
        "Мы оптимизируем ваш сайт для поисковых систем, чтобы привлечь больше трафика и повысить видимость вашего бизнеса в интернете.",
      image: "/images/about/seo.png",
    },
    {
      title: "HOST",
      description:
        "Мы предлагаем надежный и безопасный хостинг для вашего сайта, обеспечивая стабильную работу и защиту данных.",
      image: "/images/about/host.png",
    },
  ];

  return (
    <div className={styles.features}>
      <div className={styles.container}>
        <div className={styles.list}>
          {features.map((feature, index) => (
            <div key={index} className={styles.item}>
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className={styles.image}
              />
              <h3 className={styles.title}>{feature.title}</h3>

              <div className={styles.overlay}>
                <p className={styles.description}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
