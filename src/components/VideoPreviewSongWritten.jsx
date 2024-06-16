import PropTypes from "prop-types";
import "./VideoPreviewSongWritten.css";

const VideoPreviewSongWritten = ({ className = "" }) => {
  return <a className={`image-3 ${className}`} href="youtube.com" />;
};

VideoPreviewSongWritten.propTypes = {
  className: PropTypes.string,
};

export default VideoPreviewSongWritten;
