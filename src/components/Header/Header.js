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
          <a href="https://hh.kz/resume_converter/%D0%90%D1%81%D1%82%D0%B0%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%20%D0%90%D1%81%D0%BB%D0%B0%D0%BD%D0%B1%D0%B5%D0%BA.pdf?hash=d935d484ff0ba7803e0039ed1f5a5374324258&type=pdf&hhtmSource=resume&hhtmFrom=resume_list" className={styles.btn}>
            Download CV
          </a>
        </div>
   
    </div>
  );
};

export default Header;
