import React from "react";
import { FaTimes } from "react-icons/fa";
import Link from "next/link"; // Импортируем Link из next/link
import styles from "./SideBarNav.module.scss";

interface SideBarNavProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const SideBarNav: React.FC<SideBarNavProps> = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div className={`${styles.sideBar} ${isOpen ? styles.open : ""}`}>
        <button className={styles.closeBtn} onClick={toggleMenu}>
          <FaTimes />
        </button>
        <nav>
          <ul>
            <li>
              <Link href="/" passHref onClick={toggleMenu}>
                Главная
              </Link>
            </li>
            <li>
              <Link href="/about" passHref onClick={toggleMenu}>
                О студии
              </Link>
            </li>
            <li>
              <Link href="/services" passHref onClick={toggleMenu}>
                Наши услуги
              </Link>
            </li>
            <li>
              <Link href="/portfolio" passHref onClick={toggleMenu}>
                Наши проекты
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.mark}>QPD</div>
      </div>

      {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </>
  );
};

export default SideBarNav;
