import SizeDefaultLabelNoneVert from "./SizeDefaultLabelNoneVert";
import PropTypes from "prop-types";
import styles from "./MemoryTabs.module.css";

const MemoryTabs = ({ className = "" }) => {
  return (
    <div className={[styles.memoryCategoriesParent, className].join(" ")}>
      <div className={styles.memoryCategories}>
        <div className={styles.categoryNames}>
          <b className={styles.b}>עוד...</b>
          <div className={styles.divider} />
        </div>
      </div>
      <div className={styles.memoryCategories1}>
        <div className={styles.parent}>
          <b className={styles.b1}>{`ציטוטים `}</b>
          <div className={styles.divider1} />
        </div>
      </div>
      <div className={styles.memoryCategories2}>
        <div className={styles.group}>
          <b className={styles.b2}>זוכרים בספורט</b>
          <div className={styles.divider2} />
        </div>
      </div>
      <div className={styles.musicContentWrapper}>
        <div className={styles.musicContent}>
          <div className={styles.wrapper}>
            <h2 className={styles.h2}>זוכרים עם מוסיקה</h2>
          </div>
          <SizeDefaultLabelNoneVert
            sizeDefaultLabelNoneVertWidth="unset"
            sizeDefaultLabelNoneVertAlignSelf="stretch"
            sizeDefaultLabelNoneVertPosition="relative"
          />
        </div>
      </div>
    </div>
  );
};

MemoryTabs.propTypes = {
  className: PropTypes.string,
};

export default MemoryTabs;
