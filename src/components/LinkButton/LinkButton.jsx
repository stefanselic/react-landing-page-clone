import styles from './LinkButton.module.scss';

const LinkButton = ({ href, text, iconSrc, isSecondary }) => (
  <a
    href={href}
    className={`${styles.linkButton} ${
      isSecondary ? styles.linkButton__Secondary : ''
    }`}
  >
    {iconSrc && (
      <div className={styles.linkButton.imageWrapper}>
        <img src={iconSrc} className={styles.linkButton.image} alt="" />
      </div>
    )}
    {text}
  </a>
);

export default LinkButton;
