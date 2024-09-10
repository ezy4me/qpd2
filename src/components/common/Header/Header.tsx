"use client";

import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";
import styles from "./Header.module.scss";
import SideBarNav from "../SideBarNav/SideBarNav";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.socials}>
            <div className={styles.socialLinks}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter">
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram">
                <FaInstagram />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram">
                <FaTelegram />
              </a>
            </div>
            {/* <div className={styles.languageSelector}>
              <select>
                <option value="en">EN</option>
                <option value="ru">RU</option>
                <option value="es">ES</option>
              </select>
            </div> */}
          </div>

          <div className={styles.logo}>
            <Link href={"/"}>
              <h1>Quality Product Design</h1>
            </Link>
          </div>

          <button className={styles.burgerMenu} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <SideBarNav isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;
