import PropTypes from "prop-types";
import styles from "./SongWrittenLinks.module.css";

const SongWrittenLinks = ({ className = "" }) => {
  return (
    <div className={[styles.commemorationSuggestionImage, className].join(" ")}>
      <img
        className={styles.commemorationSuggestionImageChild}
        loading="lazy"
        alt=""
        src="/frame-94@2x.png"
      />
      <div className={styles.image5Wrapper}>
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
  );
};

SongWrittenLinks.propTypes = {
  className: PropTypes.string,
};

export default SongWrittenLinks;
