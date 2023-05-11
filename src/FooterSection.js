import logoSrc from './images/logo.svg';
import styles from './FooterSection.module.scss';

export default function FooterSection() {
  return (
    <section className={styles.footerSection}>
      <header className={styles.footerSection__header}>
        <div className={styles.footerSection__headerLogo}>
          <img src={logoSrc} alt="logo" />
          <span>Magician</span>
        </div>

        <nav className={styles.footerSection__navigation}>
          <a href="/" className={styles.footerSection__navigationLink}>
            Support
          </a>
          <a href="/" className={styles.footerSection__navigationLink}>
            Contact
          </a>
          <a href="/" className={styles.footerSection__navigationLink}>
            Privacy
          </a>
          <a href="/" className={styles.footerSection__navigationLink}>
            Terms
          </a>
        </nav>
      </header>
    </section>
  );
}
