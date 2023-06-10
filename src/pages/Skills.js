import React from "react";
import styles from "./skills.module.scss";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <div className={styles.skills__container}>
        <h1 className={styles.skills__title}>Skills</h1>

        <ul className={styles.skills__contentList}>
          <li className={styles.skills__contentList__item}>
            <h2 className={styles.skills__part}>Frontend</h2>
            <p>
              Javascript, TypeScript, ReactJS, React Native, Redux, HTML, CSS,
              NPM, Bootstrap, MaterialUI, NextJS, Git{" "}
            </p>
          </li>

          <li className={styles.skills__contentList__item}>
            <h2 className={styles.skills__part}>Backend</h2>
            <p>NodeJS, MongoDB, Java</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
