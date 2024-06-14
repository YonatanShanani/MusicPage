import YoutubePreviewLikedSongs from "./YoutubePreviewLikedSongs";
import LikedSongsInfo from "./LikedSongsInfo";
import FavoriteSongLinks from "./FavoriteSongLinks";
import FavoriteSongEmails from "./FavoriteSongEmails";
import PropTypes from "prop-types";
import styles from "./LovedSongs.module.css";

const LovedSongs = ({ className = "" }) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.favoriteSongItemImageContaParent}>
          <YoutubePreviewLikedSongs />
          <LikedSongsInfo />
        </div>
        <div className={styles.favoriteSongItemImagesContParent}>
          <FavoriteSongLinks />
          <div className={styles.frameContainer}>
            <FavoriteSongEmails />
          </div>
        </div>
      </div>
    </div>
  );
};

LovedSongs.propTypes = {
  className: PropTypes.string,
};

export default LovedSongs;
