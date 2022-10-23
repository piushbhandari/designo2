import React from "react";
import styles from "./Features.module.css";
import passionateImg from "./../../assets/home/desktop/illustration-passionate.svg";
import resourcesImg from "./../../assets/home/desktop/illustration-resourceful.svg";
import friendlyImg from "./../../assets/home/desktop/illustration-friendly.svg";
import circle from "./../../assets/shared/desktop/bg-pattern-small-circle.svg";

const Features = () => {
  return (
    <section
      className={styles["section-features"]}
      aria-label="section features"
    >
      <div className={`${styles["section-features__container"]} container`}>
        <ul className={styles["feature-list"]}>
          <li className={styles["feature-list__item"]}>
            <div className={styles["feature-list__image"]}>
              <img
                className="fit-image"
                src={passionateImg}
                alt="guy on a computer"
              />

              <svg xmlns="http://www.w3.org/2000/svg" width="202" height="202">
                <defs>
                  <linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%">
                    <stop offset="0%" stop-color="#5D0202" stop-opacity="0" />
                    <stop
                      offset="100%"
                      stop-color="#5D0202"
                      stop-opacity=".498"
                    />
                  </linearGradient>
                </defs>
                <circle
                  cx="101"
                  cy="101"
                  r="101"
                  fill="url(#a)"
                  fill-rule="evenodd"
                  opacity=".203"
                  transform="matrix(-1 0 0 1 202 0)"
                />
              </svg>
            </div>
            <div className={styles["feature-list__text-content"]}>
              <h3 className={styles["feature-list__title"]}>PASSIONATE</h3>
              <p className={styles["feature-list__text"]}>
                Each project starts with an in-depth brand research to ensure we
                only create products that serve a purpose. We merge art, design,
                and technology into exciting new solutions.
              </p>
            </div>
          </li>
          <li className={styles["feature-list__item"]}>
            <div className={styles["feature-list__image"]}>
              <img
                className="fit-image"
                src={resourcesImg}
                alt="guy on a computer"
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="202" height="202">
                <defs>
                  <linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%">
                    <stop offset="0%" stop-color="#5D0202" stop-opacity="0" />
                    <stop
                      offset="100%"
                      stop-color="#5D0202"
                      stop-opacity=".498"
                    />
                  </linearGradient>
                </defs>
                <circle
                  cx="101"
                  cy="101"
                  r="101"
                  fill="url(#a)"
                  fill-rule="evenodd"
                  opacity=".203"
                  transform="matrix(-1 0 0 1 202 0)"
                />
              </svg>
            </div>
            <div className={styles["feature-list__text-content"]}>
              <h3 className={styles["feature-list__title"]}>RESOURCEFUL</h3>
              <p className={styles["feature-list__text"]}>
                Everything that we do has a strategic purpose. We use an agile
                approach in all of our projects and value customer
                collaboration. It guarantees superior results that fulfill our
                clients’ needs.
              </p>
            </div>
          </li>
          <li className={styles["feature-list__item"]}>
            <div className={styles["feature-list__image"]}>
              <img
                className="fit-image"
                src={friendlyImg}
                alt="guy on a computer"
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="202" height="202">
                <defs>
                  <linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%">
                    <stop offset="0%" stop-color="#5D0202" stop-opacity="0" />
                    <stop
                      offset="100%"
                      stop-color="#5D0202"
                      stop-opacity=".498"
                    />
                  </linearGradient>
                </defs>
                <circle
                  cx="101"
                  cy="101"
                  r="101"
                  fill="url(#a)"
                  fill-rule="evenodd"
                  opacity=".203"
                  transform="matrix(-1 0 0 1 202 0)"
                />
              </svg>
            </div>
            <div className={styles["feature-list__text-content"]}>
              <h3 className={styles["feature-list__title"]}>FRIENDLY</h3>
              <p className={styles["feature-list__text"]}>
                We are a group of enthusiastic folks who know how to put people
                first. Our success depends on our customers, and we strive to
                give them the best experience a company can provide.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
