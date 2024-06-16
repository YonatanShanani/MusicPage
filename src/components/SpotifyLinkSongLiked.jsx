import PropTypes from "prop-types";
import "./SpotifyLinkSongLiked.css";

const SpotifyLinkSongLiked = ({ className = "" }) => {
  return <a className={`image-4 ${className}`} href="spotify.com" />;
};

SpotifyLinkSongLiked.propTypes = {
  className: PropTypes.string,
};

export default SpotifyLinkSongLiked;
