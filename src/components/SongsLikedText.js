import PropTypes from "prop-types";
import styles from "./SongsLikedText.module.css";

const SongsLikedText = ({ className = "", text }) => {
  return <p className={[styles.p, className].join(" ")}>{text}</p>;
};

SongsLikedText.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default SongsLikedText;
