import React from "react";
import styles from "./contacts.module.scss";
import { useSelector } from "react-redux";

const Contacts = () => {

  const mode = useSelector((state) => state.mode)

  return (
    <div className={`${styles.contacts} ${mode ? '' : styles.dark}`}>
      <div className={styles.contacts__container}>
        <h1 className={styles.contacts__title}>Contacts</h1>

        <ul className={styles.contacts__contentList}>
          <li className={styles.contacts__contentList__item}>
            <h2 className={styles.contacts__part}>Location</h2>
            <p>Moscow, Russia</p>
          </li>

          <li className={styles.contacts__contentList__item}>
            <h2 className={styles.contacts__part}>Telegram / Whatsapp</h2>
            <p>
              <a href="tel:+77078832331">+77078832331</a>
            </p>
            <p>@Asmmmir</p>
          </li>

          <li className={styles.contacts__contentList__item}>
            <h2 className={styles.contacts__part}>Email</h2>
            <p>
              {" "}
              <a href="mailto:asmmmmir@gmail.com">asmmmmir@gmail.com</a>{" "}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
