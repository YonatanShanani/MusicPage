import PropTypes from "prop-types";
import styles from "./FallenTags.module.css";

const FallenTags = ({ className = "" }) => {
  return (
    <div className={[styles.cityParent, className].join(" ")}>
      <div className={styles.city}>
        <div className={styles.wrapper}>
          <b className={styles.b}>רחובות, ישראל</b>
        </div>
      </div>
      <button className={styles.unitDetails}>
        <div className={styles.container}>
          <b className={styles.b1}>חטיבת גולני</b>
        </div>
      </button>
      <div className={styles.unitDetails1}>
        <div className={styles.frame}>
          <div className={styles.div}>מלחמת חרבות ברזל</div>
        </div>
      </div>
    </div>
  );
};

FallenTags.propTypes = {
  className: PropTypes.string,
};

export default FallenTags;
