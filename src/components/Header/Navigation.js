import styles from "./navigation.module.scss";
import {NavLink} from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__container}>
        <div className={styles.nav__row}>
          <a href="/my-portfolio" className={styles.nav__logo}>
            <strong> Frontend </strong> portfolio
          </a>
          <ul className={styles.nav__list}>
            <li className={styles.nav__list_item}>
            <NavLink className={styles.active} to='/' >Projects</NavLink>
            </li>
            <li className={styles.nav__list_item}>
            <NavLink to='/skills'>Skills</NavLink>
            </li>
            <li className={styles.nav__list_item}>
            <NavLink  to='/contacts'>Contacts</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

