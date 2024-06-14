import PropTypes from "prop-types";
import styles from "./SongsWritttenHeadline.module.css";

const SongsWritttenHeadline = ({ className = "" }) => {
  return <b className={[styles.b, className].join(" ")}>שירים לזכרו</b>;
};

SongsWritttenHeadline.propTypes = {
  className: PropTypes.string,
};

export default SongsWritttenHeadline;
