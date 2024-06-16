import PropTypes from "prop-types";
import "./PlayedAndRememberedSongWritten.css";

const PlayedAndRememberedSongWritten = ({ className = "" }) => {
  return (
    <a
      className={`a2 ${className}`}
      href="mailto:family@gmail.com?subject=השמעתי והזכרתי"
    >
      <b className="b15">השמעתי והזכרתי את מיכאל ז”ל</b>
    </a>
  );
};

PlayedAndRememberedSongWritten.propTypes = {
  className: PropTypes.string,
};

export default PlayedAndRememberedSongWritten;
