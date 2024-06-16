import PropTypes from "prop-types";
import "./SpotifyLinkSongWritten.css";

const SpotifyLinkSongWritten = ({ className = "" }) => {
  return <a className={`image-41 ${className}`} href="spotify.com" />;
};

SpotifyLinkSongWritten.propTypes = {
  className: PropTypes.string,
};

export default SpotifyLinkSongWritten;
