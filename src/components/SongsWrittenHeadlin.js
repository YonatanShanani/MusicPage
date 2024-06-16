import PropTypes from "prop-types";
import styles from "./SongsWrittenHeadlin.module.css";

const SongsWrittenHeadlin = ({ className = "", text }) => {
  return <h1 className={[styles.h1, className].join(" ")}>{text}</h1>;
};

SongsWrittenHeadlin.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default SongsWrittenHeadlin;
