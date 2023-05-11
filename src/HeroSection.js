import styles from './HeroSection.module.scss';
import logoSrc from './images/logo.svg';
import figmaSrc from './images/figma.svg';
import magicHeroSrc from './images/magic-hero.jpeg';
import heartSrc from './images/heart.svg';
import downloadSrc from './images/download.svg';
import diagramSrc from './images/diagram.svg';
import figmaTextSrc from './images/figma-text.svg';
import LinkButton from './components/LinkButton';
import TitleH2 from './components/TitleH2';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <header className={styles.heroSection__header}>
        <div className={styles.heroSection__headerLogo}>
          <img src={logoSrc} alt="logo" />
          <span>Magician beta</span>
        </div>

        <nav className={styles.heroSection__navigation}>
          <a href="/" className={styles.heroSection__navigationLink}>
            Features
          </a>
          <a href="/" className={styles.heroSection__navigationLink}>
            Pricing
          </a>
          <a href="/" className={styles.heroSection__navigationLink}>
            Install
          </a>
          <a href="/" className={styles.heroSection__navigationLink}>
            Account
          </a>
        </nav>
      </header>
      <div className={styles.heroSection__content}>
        <TitleH2 text="Every little thing it does is magic" />
        <h2 className={styles.heroSection__subtitle}>
          A magical design tool for Figma powered by AI.
        </h2>
        <LinkButton href="/" text="Install on Figma" iconSrc={figmaSrc} />
        <div className={styles.heroSection__heroImageWrapper}>
          <img
            src={magicHeroSrc}
            alt=""
            className={styles.heroSection__heroImage}
          />
        </div>

        <div className={styles.heroSection__buttonsWrapper}>
          <LinkButton
            href="/"
            text="2.1k likes"
            iconSrc={heartSrc}
            isSecondary
          />
          <LinkButton
            href="/"
            text="53.3k installs"
            iconSrc={downloadSrc}
            isSecondary
          />
        </div>

        <div className={styles.heroSection__buttonsWrapper}>
          <div className={styles.heroSection__infoTextWrapper}>
            <span>Made by</span>
            <div>
              <img src={diagramSrc} alt="" />
            </div>
          </div>
          <div className={styles.heroSection__infoTextWrapper}>
            <span>Works with</span>
            <div>
              <img src={figmaTextSrc} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
