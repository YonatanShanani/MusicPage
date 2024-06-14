import PropTypes from "prop-types";
import styles from "./YoutubePreviewLikedSongs.module.css";

const YoutubePreviewLikedSongs = ({ className = "" }) => {
  return (
    <video
      className={[styles.favoriteSongItemImageConta, className].join(" ")}
      controls
    >
      <source src="https://Youtube-preview.com" />
    </video>
  );
};

YoutubePreviewLikedSongs.propTypes = {
  className: PropTypes.string,
};

export default YoutubePreviewLikedSongs;
