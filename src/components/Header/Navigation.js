import ModeButton from "./ModeButton";
import styles from "./navigation.module.scss";
import {Link, NavLink} from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__container}>
        <div className={styles.nav__row}>
          <Link to="/my-portfolio" className={styles.nav__logo}>
            <strong> Frontend </strong> portfolio
          </Link>
          <ModeButton />
          <ul className={styles.nav__list}>
            <li className={styles.nav__list_item}>
            <NavLink className={styles.active} to='/my-portfolio' >Projects</NavLink>
            </li>
            <li className={styles.nav__list_item}>
            <NavLink to='/my-portfolio/skills'>Skills</NavLink>
            </li>
            <li className={styles.nav__list_item}>
            <NavLink  to='/my-portfolio/contacts'>Contacts</NavLink>
            </li>
  
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

