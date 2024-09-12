"use client";

import React, { useState } from "react";
import styles from "./RequestSection.module.scss";
import Modal from "@/components/ui/Modal/Modal";
import Button from "@/components/ui/Button/Button";
import ScrollAnimation from "@/components/ui/ScrollAnimation/ScrollAnimation";

interface RequestProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

const RequestSection: React.FC<RequestProps> = ({
  title = "ЕСТЬ ВОПРОСЫ?",
  description = "оставьте заявку и мы позвоним в течение дня",
  buttonText = "Отправить заявку",
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className={styles.request}>
      <ScrollAnimation>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Button
          size="large"
          variant="outlined"
          onClick={() => setShowModal(true)}>
          {buttonText}
        </Button>
      </ScrollAnimation>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </section>
  );
};

export default RequestSection;
