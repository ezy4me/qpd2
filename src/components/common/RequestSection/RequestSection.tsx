"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./RequestSection.module.scss";
import Modal from "@/components/ui/Modal/Modal";
import Button from "@/components/ui/Button/Button";

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
    <div className={styles.request}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Button
        size="large"
        variant="outlined"
        onClick={() => setShowModal(true)}>
        {buttonText}
      </Button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default RequestSection;
