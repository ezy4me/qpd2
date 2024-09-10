"use client";

import React from "react";
import styles from "./Footer.module.scss";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h2 className={styles.logo}>Quality Product Design</h2>
          <p className={styles.description}>
            Мы являемся креативным агентством, которое предоставляет
            высококачественные решения в области веб-дизайна и разработки для
            клиентов по всему миру.
          </p>
        </div>
        <div className={styles.links}>
          <ul className={styles.linkList}>
            <li>
              <Link href="/">Главная</Link>
            </li>
            <li>
              <Link href="/about">О нас</Link>
            </li>
            <li>
              <Link href="/services">Услуги</Link>
            </li>
            <li>
              <Link href="/contact">Контакты</Link>
            </li>
          </ul>
        </div>
        <div className={styles.social}>
          <h3 className={styles.title}>Следите за нами</h3>
          <div className={styles.socialIcons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          &copy; {new Date().getFullYear()} QPD. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
