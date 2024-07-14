import React from "react";
import styles from "./skills.module.scss";
import { useSelector } from "react-redux";

const Skills = () => {
  const mode = useSelector((state) => state.mode)


  return (
    <div className={`${styles.skills} ${mode ? '' : styles.dark}`}>
      <div className={styles.skills__container}>
        <h1 className={styles.skills__title}>Skills</h1>

        <ul className={styles.skills__contentList}>
          <li className={styles.skills__contentList__item}>
            <h2 className={styles.skills__part}>Frontend</h2>
            <p>
              Javascript, TypeScript, ReactJS, Vue3 ,Redux, RTK, HTML, CSS,
              NPM, Bootstrap, Material UI, Next.js, Nuxt.js, Tailwind, Vitest, Jest, Vite, RESTful API Git{" "}
            </p>
          </li>

          <li className={styles.skills__contentList__item}>
            <h2 className={styles.skills__part}>Backend</h2>
            <p>NodeJS</p>
          </li>

          <li className={styles.skills__contentList__item}>
            <h2 className={styles.skills__part}>Database</h2>
            <p>MongoDB</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
