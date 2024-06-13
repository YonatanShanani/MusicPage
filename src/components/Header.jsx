import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <header className={styles.logoContainerWrapper}>
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
      <div className={styles.frameWrapper}>
        <div className={styles.frameContainer}>
          <div className={styles.navbarDropdownButtonParent}>
            <div className={styles.navbarDropdownButton}>
              <div className={styles.iconWrapper}>
                <button className={styles.icon}>
                  <img
                    className={styles.icon1}
                    alt=""
                    loading="lazy"
                    src="/icon.svg"
                  />
                </button>
              </div>
              <div className={styles.textWrapper}>
                <a className={styles.text}>חיפוש</a>
              </div>
            </div>
            <select className={styles.parent}>
              <option value="הכל">הכל</option>
              <option value="מוזיקה">מוזיקה</option>
              <option value="ספורט">ספורט</option>
              <option value="ציטוטים">ציטוטים</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
