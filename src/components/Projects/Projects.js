import styles from './projects.module.scss'

const Projects = () => {
  return (
    <div className={styles.projects}>
        <div className={styles.projects__container}>
            <h2 className={styles.projects__title}>Projects</h2>

            <ul className={styles.projects__lists}>
                <li className={styles.projects__item}>
                    <img src="../img/projects/01.jpg" alt="" />
                    <h3 className={styles.projects__name}>Gaming streaming portal</h3>
                </li>
                <li className={styles.projects__item}>
                    <img src="../img/projects/02.jpg" alt="" />
                    <h3 className={styles.projects__name}>Video service</h3>
                </li>
                <li className={styles.projects__item}>
                    <img src="../img/projects/03.jpg" alt="" />
                    <h3 className={styles.projects__name}>Video portal</h3>
                </li>
                <li className={styles.projects__item}>
                    <img src="../img/projects/04.jpg" alt="" />
                    <h3 className={styles.projects__name}>Dating app</h3>
                </li>
                <li className={styles.projects__item}>
                    <img src="../img/projects/05.jpg" alt="" />
                    <h3 className={styles.projects__name}>Landing</h3>
                </li>
                <li className={styles.projects__item}>
                    <img src="../img/projects/06.jpg" alt="" />
                    <h3 className={styles.projects__name}>Gaming community</h3>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Projects