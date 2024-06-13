import Links from "./Links";
import PropTypes from "prop-types";
import styles from "./LovedSongs.module.css";

const LovedSongs = ({ className = "" }) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.favoriteSongItemImageContaParent}>
          <video className={styles.favoriteSongItemImageConta} controls>
            <source src="https://Youtube-preview.com" />
          </video>
          <div className={styles.frameGroup}>
            <div className={styles.laddersMacMillerWrapper}>
              <h1 className={styles.laddersMac}>Ladders / Mac Miller</h1>
            </div>
            <div className={styles.wrapper}>
              <p className={styles.p}>
                בדיוק בשבוע שבו נהרג, רגע לפני צאתו לחופשת השחרור, מיכאל קנה את
                האלבום שבו מופיע השיר הזה. האלבום הגיע במהלך השבעה - ונותר
                בניילון. השיר מדבר על הצורך התמידי להיות עם ראש מורם, ולמצוא את
                האור בדברים - לדעת איך להסתכל על העולם.
              </p>
            </div>
          </div>
        </div>
        <Links propPadding="0px 0px var(--padding-9xs)" />
      </div>
    </div>
  );
};

LovedSongs.propTypes = {
  className: PropTypes.string,
};

export default LovedSongs;
