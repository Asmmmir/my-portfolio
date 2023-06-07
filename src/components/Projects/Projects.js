import styles from './projects.module.scss'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className={styles.projects}>
        <div className={styles.projects__container}>
            <h2 className={styles.projects__title}>Projects</h2>

            <ul className={styles.projects__lists}>
                <Link to='/my-portfolio/project/1' className={styles.projects__item}>
                    <img src="./my-portfolio/img/01.jpg" alt="" />
                    <h3 className={styles.projects__name}>Movies App</h3>
                </Link>
                <Link to='/my-portfolio/project/2' className={styles.projects__item}>
                    <img src='./my-portfolio/img/02.jpg' alt="" />
                    <h3 className={styles.projects__name}>Fast food shop</h3>
                </Link>
                <Link to='/my-portfolio/project/3' className={styles.projects__item}>
                    <img src='./my-portfolio/img/03.jpg' alt=""/>
                    <h3 className={styles.projects__name}>Video portal</h3>
                </Link>
                <Link to='/my-portfolio/project/4' className={styles.projects__item}>
                    <img src='./my-portfolio/img/04.jpg' alt="" />
                    <h3 className={styles.projects__name}>Dating app</h3>
                </Link>
                <Link to='/my-portfolio/project/5' className={styles.projects__item}>
                    <img src='./my-portfolio/img/05.jpg' alt="" />
                    <h3 className={styles.projects__name}>Landing</h3>
                </Link>
                <Link to='/my-portfolio/project/6' className={styles.projects__item}>
                    <img src='./my-portfolio/img/06.jpg' alt="" />
                    <h3 className={styles.projects__name}>Gaming community</h3>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Projects