import PropTypes from "prop-types";
import styles from "./LikedSongsHeadline.module.css";

const LikedSongsHeadline = ({ className = "" }) => {
  return <h1 className={[styles.h1, className].join(" ")}>שירים שאהב</h1>;
};

LikedSongsHeadline.propTypes = {
  className: PropTypes.string,
};

export default LikedSongsHeadline;
