import PropTypes from "prop-types";
import styles from "./LikedSongsInfo.module.css";

const LikedSongsInfo = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.laddersMacMillerWrapper}>
        <h1 className={styles.laddersMac}>Ladders / Mac Miller</h1>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.p}>
          בדיוק בשבוע שבו נהרג, רגע לפני צאתו לחופשת השחרור, מיכאל קנה את האלבום
          שבו מופיע השיר הזה. האלבום הגיע במהלך השבעה - ונותר בניילון. השיר מדבר
          על הצורך התמידי להיות עם ראש מורם, ולמצוא את האור בדברים - לדעת איך
          להסתכל על העולם.
        </p>
      </div>
    </div>
  );
};

LikedSongsInfo.propTypes = {
  className: PropTypes.string,
};

export default LikedSongsInfo;
