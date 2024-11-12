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
          // <Link to="/my-portfolio/project/1" className={`${styles.projects__item} ${mode ? '' : styles.dark}`}>
          //   <img src="../my-portfolio/img/instagram.jpg" alt="" />
          //   <h3 className={styles.projects__name}>Instagram Clone (still in process)</h3>
          // </Link>
          <Link to="/my-portfolio/project/6" className={`${styles.projects__item} ${mode ? '' : styles.dark}`}>
            <img src="../my-portfolio/img/kropp.png" alt="" />
            <h3 className={styles.projects__name}>Kropp crossfit</h3>
          </Link>
          <Link to="/my-portfolio/project/2" className={`${styles.projects__item} ${mode ? '' : styles.dark}`}>
            <img src="../my-portfolio/img/nike.png" alt="" />
            <h3 className={styles.projects__name}>Nike</h3>
          </Link>
          <Link to="/my-portfolio/project/3" className={`${styles.projects__item} ${mode ? '' : styles.dark}`}>
            <img src="../my-portfolio/img/gericht.jpg" alt="" />
            <h3 className={styles.projects__name}>Gericht restaurant</h3>
          </Link>
          <Link to="/my-portfolio/project/4" className={`${styles.projects__item} ${mode ? '' : styles.dark}`}>
            <img src="../my-portfolio/img/goodfood.jpg" alt="" />
            <h3 className={styles.projects__name}>Good Food</h3>
          </Link>
          // <Link to="/my-portfolio/project/5" className={`${styles.projects__item} ${mode ? '' : styles.dark}`}>
          //   <img src="../my-portfolio/img/typeapp.png" alt="" />
          //   <h3 className={styles.projects__name}>Typing speed</h3>
          // </Link>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
