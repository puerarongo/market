import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        cupiditate excepturi voluptatibus facilis, accusantium, non nisi
        incidunt officia dolorum voluptate consequatur tenetur molestias eveniet
        quo facere, provident atque consequuntur exercitationem.
      </p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.label}>Email:</p>
          <a
            href="mailto:akhardin@i.ua"
            type="email"
            className={styles.footer__link}
          >
            akhardin@i.ua
          </a>
        </li>
        <li className={styles.item}>
          <p className={styles.label}>Phone:</p>
          <a
            href="tel:+40666856609"
            type="phone"
            className={styles.footer__link}
          >
            0666856609
          </a>
        </li>
        <li className={styles.item}>
          <p className={styles.label}>GitHub:</p>
          <a
            href="https://www.github.com"
            type="email"
            className={styles.footer__link}
          >
            www.akhardin.com
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
