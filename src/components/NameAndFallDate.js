import PropTypes from "prop-types";
import styles from "./NameAndFallDate.module.css";

const NameAndFallDate = ({ className = "" }) => {
  return (
    <div className={[styles.heroNameContainerParent, className].join(" ")}>
      <div className={styles.heroNameContainer}>
        <div className={styles.div}>
          <span>{`סמ”ר `}</span>
          <span className={styles.span}>מיכאל בן חמו ז”ל</span>
        </div>
      </div>
      <div className={styles.wrapper}>
        <h2 className={styles.h2}>נפל בכ”ב בתשרי התשפ”ד (07 באוקטובר 2023)</h2>
      </div>
    </div>
  );
};

NameAndFallDate.propTypes = {
  className: PropTypes.string,
};

export default NameAndFallDate;
