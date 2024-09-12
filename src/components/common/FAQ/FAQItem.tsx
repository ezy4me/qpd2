"use client";

import React, { useState } from "react";
import styles from "./FAQ.module.scss";
import ScrollAnimation from "@/components/ui/ScrollAnimation/ScrollAnimation";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <ScrollAnimation>
      <div className={styles.item}>
        <div
          className={`${styles.question} ${isOpen ? styles.qOpen : ""}`}
          onClick={toggleOpen}>
          <p>{question}</p>
          <span className={`${styles.icon} ${isOpen ? styles.open : ""}`}>
            +
          </span>
        </div>
        <div className={`${styles.answer} ${isOpen ? styles.open : ""}`}>
          {answer}
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default FAQItem;
