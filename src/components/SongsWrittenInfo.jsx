import SongsWrittenHeadlin from "./SongsWrittenHeadlin";
import SongsWrittenText from "./SongsWrittenText";
import PropTypes from "prop-types";
import styles from "./SongsWrittenInfo.module.css";

const SongsWrittenInfo = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.wrapper}>
        <SongsWrittenHeadlin text="עיגולים של הלילה" />
      </div>
      <div className={styles.container}>
        <SongsWrittenText
          text={`שיר שכתב משה הרטמן, אחד מחבריו הטובים של מיכאל, לזכרו.
משה מספר: מיכאל ואני הכרנו בכיתה א׳, ומאז היינו בלתי נפרדים, קשר של אחים. הוא היה בן אדם מיוחד, ערכי ומסור ואידיאליסט, שהפיץ אור בכל מקום שהוא הגיע אליו, וכמות האנשים שאהבו אותו פשוט לא הגיונית. מספיק היה להסתכל לו בעיניים כדי לראות כמה הוא טוב ולהתאהב בו.`}
        />
      </div>
    </div>
  );
};

SongsWrittenInfo.propTypes = {
  className: PropTypes.string,
};

export default SongsWrittenInfo;
