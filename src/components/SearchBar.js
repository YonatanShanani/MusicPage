import PropTypes from "prop-types";
import styles from "./SearchBar.module.css";

const SearchBar = ({ className = "" }) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
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
  );
};

SearchBar.propTypes = {
  className: PropTypes.string,
};

export default SearchBar;
