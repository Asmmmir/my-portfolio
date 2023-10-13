import { useSelector } from "react-redux";
import styles from "./projects.module.scss";
import { Link } from "react-router-dom";

const Projects = () => {
const mode = useSelector((state) => state.mode)

  return (
    <div className={styles.projects}>
      <div className={styles.projects__container}>
        <h2 className={styles.projects__title}>Projects</h2>

        <ul className={styles.projects__lists}>
          <Link to="/my-portfolio/project/1" className={`${styles.projects__item} ${mode ? '' : styles.dark}`}>
            <img src="../my-portfolio/img/01.jpg" alt="" />
            <h3 className={styles.projects__name}>Movies App</h3>
          </Link>
          <Link to="/my-portfolio/project/3" className={`${styles.projects__item} ${mode ? '' : styles.dark}`}>
            <img src="../my-portfolio/img/05.jpg" alt="" />
            <h3 className={styles.projects__name}>Hastam</h3>
          </Link>
          <Link to="/my-portfolio/project/4" className={`${styles.projects__item} ${mode ? '' : styles.dark}`}>
            <img src="../my-portfolio/img/04.jpg" alt="" />
            <h3 className={styles.projects__name}>Good Food</h3>
          </Link>
          <Link to="/my-portfolio/project/5" className={`${styles.projects__item} ${mode ? '' : styles.dark}`}>
            <img src="../my-portfolio/img/06.png" alt="" />
            <h3 className={styles.projects__name}>Typing speed</h3>
          </Link>

        </ul>
      </div>
    </div>
  );
};

export default Projects;
