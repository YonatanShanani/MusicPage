import PropTypes from "prop-types";
import "./AppleMusicLinkSongLiked.css";

const AppleMusicLinkSongLiked = ({ className = "" }) => {
  return <a className={`image-5 ${className}`} href="applemusic.com" />;
};

AppleMusicLinkSongLiked.propTypes = {
  className: PropTypes.string,
};

export default AppleMusicLinkSongLiked;
