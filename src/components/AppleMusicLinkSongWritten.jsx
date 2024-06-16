import PropTypes from "prop-types";
import "./AppleMusicLinkSongWritten.css";

const AppleMusicLinkSongWritten = ({ className = "" }) => {
  return <a className={`image-51 ${className}`} href="applemusic.com" />;
};

AppleMusicLinkSongWritten.propTypes = {
  className: PropTypes.string,
};

export default AppleMusicLinkSongWritten;
