import React from "react";
import styles from "./SemiFooter.module.css";
import pattern2 from "./../../assets/shared/desktop/bg-pattern-two-circles.svg";
import pattern3 from "./../../assets/shared/desktop/bg-pattern-three-circles.svg";

const SemiFooter = () => {
  return (
    <section className="section-semifooter" aria-labelledby="semi">
      <div className={`${styles["section-semifooter__container"]} container`}>
        <div className={styles["section-semifooter__wrapper"]}>
          <div
            className={`${styles["section-semifooter__pattern"]} ${styles["section-semifooter__pattern--top"]}`}
          >
            <img src={pattern2} alt="circles" />
          </div>
          <div className="col1">
            <h2 className={styles["section-semifooter__title"]} id="semi">
              Let’s talk about your project
            </h2>
            <p className={styles["section-semifooter__text"]}>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <button className={styles["section-semifooter__cta"]}>
            Get in touch
          </button>
          <div
            className={`${styles["section-semifooter__pattern"]} ${styles["section-semifooter__pattern--bottom"]}`}
          >
            <img src={pattern2} alt="circles" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SemiFooter;
