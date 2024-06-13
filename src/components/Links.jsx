import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Links.module.css";

const Links = ({ className = "", propPadding }) => {
  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={[styles.commemorationSuggestionImageParent, className].join(
        " "
      )}
    >
      <div className={styles.commemorationSuggestionImage}>
        <img
          className={styles.commemorationSuggestionImageChild}
          loading="lazy"
          alt=""
          src="/frame-94@2x.png"
        />
        <div className={styles.image5Wrapper} style={frameDivStyle}>
          <img
            className={styles.image5Icon}
            loading="lazy"
            alt=""
            src="/image-5@2x.png"
          />
        </div>
        <img
          className={styles.commemorationSuggestionImageItem}
          loading="lazy"
          alt=""
          src="/frame-93@2x.png"
        />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.parent}>
          <div className={styles.div}>
            <h2 className={styles.h2}>
              <span>
                {`להצעת הנצחה `}
                <span className={styles.span}>לחצו כאן</span>
              </span>
            </h2>
          </div>
          <div className={styles.div1}>
            <h2 className={styles.h21}>השמעתי והזכרתי את מיכאל ז”ל</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

Links.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default Links;
