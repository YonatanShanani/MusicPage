import PropTypes from "prop-types";
import styles from "./SongsWrittenText.module.css";

const SongsWrittenText = ({ className = "", text }) => {
  return (
    <p className={[styles.p, className].join(" ")}>
      <span className={styles.span}>{text}</span>
      <span className={styles.span1}>
        את השיר כתבתי באחת הנסיעות מהמילואים לשבעה של מיכאל. כל פעם עצרתי בצד
        כדי להוסיף עוד שורה, וכשהגעתי לבית של מיכאל השיר כבר היה כמעט גמור. אני
        מרגיש שמיכאל נמצא איתי תמיד, ואני רואה אותו בכל פעם שאני מביט בכוכבים
        בלילה. יודע שהוא כאן ומאיר לי את הדרך, ומכאן השם של השיר
        ״עיגולים של הלילה״.
      </span>
    </p>
  );
};

SongsWrittenText.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default SongsWrittenText;
