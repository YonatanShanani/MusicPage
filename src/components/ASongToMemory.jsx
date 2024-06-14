import YoutubePreview from "./YoutubePreview";
import SongsWrittenInfo from "./SongsWrittenInfo";
import SongWrittenLinks from "./SongWrittenLinks";
import SongWrittenEmails from "./SongWrittenEmails";
import PropTypes from "prop-types";
import styles from "./ASongToMemory.module.css";

const ASongToMemory = ({ className = "" }) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.songItemImageContainerParent}>
          <div className={styles.songItemImageContainer}>
            <YoutubePreview />
          </div>
          <SongsWrittenInfo />
        </div>
        <div className={styles.commemorationSuggestionImageParent}>
          <SongWrittenLinks />
          <div className={styles.frameContainer}>
            <SongWrittenEmails />
          </div>
        </div>
      </div>
    </div>
  );
};

ASongToMemory.propTypes = {
  className: PropTypes.string,
};

export default ASongToMemory;
