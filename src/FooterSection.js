import logoSrc from './images/logo.svg';
import styles from './FooterSection.module.scss';

export default function FooterSection() {
  return (
    <section className={styles.footerSection}>
      <header className={styles.footerSection_header}>
        <div className={styles.footerSection_headerLogo}>
          <img src={logoSrc} alt="logo" />
          <span>Magician</span>
        </div>

        <nav className={styles.footerSection_navigation}>
          <a href="/" className={styles.footerSection_navigationLink}>
            Support
          </a>
          <a href="/" className={styles.footerSection_navigationLink}>
            Contact
          </a>
          <a href="/" className={styles.footerSection_navigationLink}>
            Privacy
          </a>
          <a href="/" className={styles.footerSection_navigationLink}>
            Terms
          </a>
        </nav>
      </header>
    </section>
  );
}
