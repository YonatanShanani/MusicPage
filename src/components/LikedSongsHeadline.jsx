import PropTypes from "prop-types";
import styles from "./LikedSongsHeadline.module.css";

const LikedSongsHeadline = ({ className = "", text }) => {
  return <h1 className={[styles.h1, className].join(" ")}>{text}</h1>;
};

LikedSongsHeadline.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default LikedSongsHeadline;
