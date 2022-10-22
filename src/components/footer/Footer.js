/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./Footer.module.css";
import logo from "./../../assets/shared/desktop/logo-light.png";
import facebook from "./../../assets/shared/desktop/icon-facebook.svg";
import youtube from "./../../assets/shared/desktop/icon-youtube.svg";
import twitter from "./../../assets/shared/desktop/icon-twitter.svg";
import pinterest from "./../../assets/shared/desktop/icon-pinterest.svg";
import instagram from "./../../assets/shared/desktop/icon-instagram.svg";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles["footer__container"]} container`}>
        <div className={styles["footer__top"]}>
          <div className={styles["footer__logo"]}>
            <img className="fit-image" src={logo} alt="designo company" />
          </div>
          <ul className={styles["nav-links"]}>
            <li className={styles["nav-links__item"]}>
              <a href="#" className={styles["nav-links__link"]}>
                our company
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

        <div className={styles["footer__bottom"]}>
          <div className={styles["footer__text"]}>
            <div className={styles["footer__location-text"]}>
              <p>Designo Central Office</p>
              <p>
                <span className={styles["not-bold"]}>
                  3886 Wellington Street
                </span>
              </p>
              <p>
                <span className={styles["not-bold"]}>
                  Toronto, Ontario M9C 3J5
                </span>
              </p>
            </div>
            <div className={styles["footer__contact-text"]}>
              <p>Contact Us (Central Office)</p>
              <p>P : +1 253-863-8967</p>
              <p> M : contact@designo.co</p>
            </div>
          </div>
          <ul className={styles["social-links"]}>
            <li className={styles["social-links__item"]}>
              <a
                href="#"
                className={styles["social-links__link"]}
                aria-label="facebook"
              >
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li className={styles["social-links__item"]}>
              <a
                href="#"
                className={styles["social-links__link"]}
                aria-label="youtube"
              >
                <img src={youtube} alt="youtube" />
              </a>
            </li>
            <li className={styles["social-links__item"]}>
              <a
                href="#"
                className={styles["social-links__link"]}
                aria-label="twitter"
              >
                <img src={twitter} alt="twitter" />
              </a>
            </li>
            <li className={styles["social-links__item"]}>
              <a
                href="#"
                className={styles["social-links__link"]}
                aria-label="pinterest"
              >
                <img src={pinterest} alt="pinterest" />
              </a>
            </li>
            <li className="social-links__item">
              <a href="#" className="social-links__link" aria-label="instagram">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
