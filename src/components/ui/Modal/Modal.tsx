"use client";

import React, { FC } from "react";
import styles from "./Modal.module.scss";
import Button from "../Button/Button";

interface ModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const Modal: FC<ModalProps> = ({ showModal, setShowModal }) => {
  const handleClose = () => setShowModal(false);

  return (
    <>
      {showModal && (
        <div className={styles.modal} onClick={handleClose}>
          <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            <span className={styles.closeButton} onClick={handleClose}>
              &times;
            </span>
            <h2 className={styles.title}>Поля для связи</h2>
            <form className={styles.form}>
              <input
                className={styles.input}
                type="text"
                placeholder="Ваше имя"
                required
              />
              <input
                className={styles.input}
                type="email"
                placeholder="Ваша почта"
                required
              />
              <input
                className={styles.input}
                type="tel"
                placeholder="Ваш телефон"
                required
              />
              <textarea
                className={styles.textarea}
                placeholder="Кратко опишите задачу"
                required></textarea>
              <Button
                size="large"
                variant="primary"
                type="submit">
                ОТПРАВИТЬ
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
