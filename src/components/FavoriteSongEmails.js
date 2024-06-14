import PropTypes from "prop-types";
import styles from "./FavoriteSongEmails.module.css";

const FavoriteSongEmails = ({ className = "" }) => {
  return (
    <div className={[styles.parent, className].join(" ")}>
      <div className={styles.div}>
        <h2 className={styles.h2}>
          <span>
            {`להצעת הנצחה `}
            <span className={styles.span}>לחצו כאן</span>
          </span>
        </h2>
      </div>
      <div className={styles.div1}>
        <h2 className={styles.h21}>השמעתי והזכרתי את מיכאל ז”ל</h2>
      </div>
    </div>
  );
};

FavoriteSongEmails.propTypes = {
  className: PropTypes.string,
};

export default FavoriteSongEmails;
