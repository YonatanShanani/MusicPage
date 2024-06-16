import PropTypes from "prop-types";
import styles from "./ContactFamily.module.css";

const ContactFamily = ({ className = "" }) => {
  return (
    <div className={[styles.contactFamily, className].join(" ")}>
      <div className={styles.contactButton}>
        <u className={styles.u}>לחצו כאן</u>
      </div>
      <div className={styles.contactButton1}>
        <div className={styles.div}>ליצירת קשר עם נציג המשפחה</div>
      </div>
    </div>
  );
};

ContactFamily.propTypes = {
  className: PropTypes.string,
};

export default ContactFamily;
