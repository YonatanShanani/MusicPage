import PropTypes from "prop-types";
import "./VideoPreviewSongLiked.css";

const VideoPreviewSongLiked = ({ className = "" }) => {
  return <a className={`image-11 ${className}`} href="youtube.com" />;
};

VideoPreviewSongLiked.propTypes = {
  className: PropTypes.string,
};

export default VideoPreviewSongLiked;
