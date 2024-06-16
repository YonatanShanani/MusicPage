import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({ className = "" }) => {
  return (
    <header className={[styles.logoContainerWrapper, className].join(" ")}>
      <div className={styles.logoContainer}>
        <div className={styles.emojioneMonotonewiltedFloweWrapper}>
          <img
            className={styles.emojioneMonotonewiltedFloweIcon}
            loading="lazy"
            alt=""
            src="/emojionemonotonewiltedflower@2x.png"
          />
        </div>
        <div className={styles.remembranceTitleParent}>
          <div className={styles.remembranceTitle}>
            <a className={styles.a}>זוכרים ביחד</a>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.div}>
              אתר הנצחה וכבוד לגיבורי וגיבורות ישראל
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
