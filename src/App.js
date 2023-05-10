import './App.css';
import styles from './App.module.scss';
import './index.css';
// import { ReactComponent as StarLogo } from './images/StarLogo.svg';

export default function App() {
  return (
    <>
      <section className={styles.heroSection}></section>
      <section className={styles.featureSection}>
        <div>
          <h2>
            <img src="assets/images/spells.svg" alt="" />
            Wave Your Magic Wand
          </h2>
          <p>
            Design with the power of AI to do everything from copywriting to
            generating unique icons from text.
          </p>
          zui
        </div>
      </section>
      <section className={styles.actionsSection} />
      <section className={styles.diagramSection} />
      <section className={styles.pricingSection} />
      <section className={styles.tweetsSection} />
      <footer>my footer</footer>
    </>
  );
}
