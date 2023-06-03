import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.header__wrapper}>
          <h1 className={styles.header__title}>
            <strong>
              Hi, I'm <em>Aslan </em>
            
            <br /> I'm a frontend developer </strong>
          </h1>
          <div className={styles.header__text}>
            <p>with passion for learning and creating</p>
          </div>
          <a href="./index.html" className={styles.btn}>
            Download CV
          </a>
        </div>
   
    </div>
  );
};

export default Header;
