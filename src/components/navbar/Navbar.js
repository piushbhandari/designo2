/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "./../../assets/shared/desktop/logo-dark.png";
import hamburger from "./../../assets/shared/mobile/icon-hamburger.svg";
import close from "./../../assets/shared/mobile/icon-close.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleMenuBtn(e) {
    e.preventDefault();
    setIsOpen(!isOpen);
  }
  return (
    <header className={styles.header}>
      <div className={`${styles["header__container"]} container`}>
        <div className={styles.logo}>
          <a href="/">
            <img className="fit-image" src={logo} alt="designo company" />
          </a>
        </div>
        <nav className={styles.nav}>
          <div
            className={`${styles["nav-links-container"]} ${
              isOpen ? styles["open-nav"] : ""
            }`}
          >
            <ul className={`${styles["nav-links"]}  `} role="list">
              <li className={styles["nav-links__item"]}>
                <a href="#" className={styles["nav-links__link"]}>
                  Our Company
                </a>
              </li>
              <li className={styles["nav-links__item"]}>
                <a href="#" className={styles["nav-links__link"]}>
                  locations
                </a>
              </li>
              <li className={styles["nav-links__item"]}>
                <a href="#" className={styles["nav-links__link"]}>
                  contact
                </a>
              </li>
            </ul>
          </div>
          <button
            className={styles["nav-links__toggle-menu"]}
            onClick={handleMenuBtn}
          >
            <img
              src={isOpen ? close : hamburger}
              alt={isOpen ? "close menu" : "open menu"}
            />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
