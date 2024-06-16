import PropTypes from "prop-types";
import "./PlayedSongAndRememberedSongLik.css";

const PlayedSongAndRememberedSongLik = ({ className = "" }) => {
  return (
    <a
      className={`a ${className}`}
      href="mailto:family@gmail.com?subject=השמעתי והזכרתי"
    >
      <b className="b13">השמעתי והזכרתי את מיכאל ז”ל</b>
    </a>
  );
};

PlayedSongAndRememberedSongLik.propTypes = {
  className: PropTypes.string,
};

export default PlayedSongAndRememberedSongLik;
