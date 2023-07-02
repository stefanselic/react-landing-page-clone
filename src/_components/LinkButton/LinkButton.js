import styles from './LinkButton.module.scss';

export default function LinkButton({ href, text, iconSrc, isSecondary }) {
  return (
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
}
