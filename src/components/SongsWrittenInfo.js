import PropTypes from "prop-types";
import styles from "./SongsWrittenInfo.module.css";

const SongsWrittenInfo = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>עיגולים של הלילה</h1>
      </div>
      <div className={styles.container}>
        <p className={styles.p}>
          <span
            className={styles.span}
          >{`שיר שכתב משה הרטמן, אחד מחבריו הטובים של מיכאל, לזכרו.
משה מספר: מיכאל ואני הכרנו בכיתה א׳, ומאז היינו בלתי נפרדים, קשר של אחים. הוא היה בן אדם מיוחד, ערכי ומסור ואידיאליסט, שהפיץ אור בכל מקום שהוא הגיע אליו, וכמות האנשים שאהבו אותו פשוט לא הגיונית. מספיק היה להסתכל לו בעיניים כדי לראות כמה הוא טוב ולהתאהב בו.`}</span>
          <span className={styles.span1}>
            את השיר כתבתי באחת הנסיעות מהמילואים לשבעה של מיכאל. כל פעם עצרתי
            בצד כדי להוסיף עוד שורה, וכשהגעתי לבית של מיכאל השיר כבר היה כמעט
            גמור. אני מרגיש שמיכאל נמצא איתי תמיד, ואני רואה אותו בכל פעם שאני
            מביט בכוכבים בלילה. יודע שהוא כאן ומאיר לי את הדרך, ומכאן השם של
            השיר ״עיגולים של הלילה״.
          </span>
        </p>
      </div>
    </div>
  );
};

SongsWrittenInfo.propTypes = {
  className: PropTypes.string,
};

export default SongsWrittenInfo;
