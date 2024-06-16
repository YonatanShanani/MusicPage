import PropTypes from "prop-types";
import "./YoutubeLinkSongWritten.css";

const YoutubeLinkSongWritten = ({ className = "" }) => {
  return <a className={`image-61 ${className}`} href="youtube.com" />;
};

YoutubeLinkSongWritten.propTypes = {
  className: PropTypes.string,
};

export default YoutubeLinkSongWritten;
