import SongsLikedHeadline from "./SongsWritttenHeadline";
import SongsLikedText from "./SongsLikedText";
import PropTypes from "prop-types";
import styles from "./LikedSongsInfo.module.css";

const LikedSongsInfo = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.laddersMacMillerWrapper}>
        <SongsLikedHeadline
          text="Ladders / Mac Miller"
          bHeight="55px"
          bFontSize="32px"
          bMargin="0"
          bAlignSelf="stretch"
          bTextDecoration="underline"
        />
      </div>
      <div className={styles.wrapper}>
        <SongsLikedText text="בדיוק בשבוע שבו נהרג, רגע לפני צאתו לחופשת השחרור, מיכאל קנה את האלבום שבו מופיע השיר הזה. האלבום הגיע במהלך השבעה - ונותר בניילון. השיר מדבר על הצורך התמידי להיות עם ראש מורם, ולמצוא את האור בדברים - לדעת איך להסתכל על העולם." />
      </div>
    </div>
  );
};

LikedSongsInfo.propTypes = {
  className: PropTypes.string,
};

export default LikedSongsInfo;
