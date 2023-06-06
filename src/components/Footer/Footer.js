import styles from "./footer.module.scss";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { SlSocialVkontakte } from "react-icons/sl";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__wrapper}>
          <ul className={styles.footer__socials}>
            <li className={styles.footer__socials_item}>
              <AiFillLinkedin />
            </li>
            <li className={styles.footer__socials_item}>
              <AiFillGithub />
            </li>
            <li className={styles.footer__socials_item}>
              <SlSocialVkontakte />
            </li>
            <li className={styles.footer__socials_item}>
              <AiFillInstagram />
            </li>
          </ul>
          <div className={styles.footer__socials_copyright}>Copyrights</div>
        </div>
      </div>
    </div>
  );
}
