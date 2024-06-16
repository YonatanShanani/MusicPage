import PropTypes from "prop-types";
import "./YoutubeLinkSongLiked.css";

const YoutubeLinkSongLiked = ({ className = "" }) => {
  return <a className={`image-6 ${className}`} href="youtube.com" />;
};

YoutubeLinkSongLiked.propTypes = {
  className: PropTypes.string,
};

export default YoutubeLinkSongLiked;
