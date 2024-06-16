import PropTypes from "prop-types";
import styles from "./Rank.module.css";

const Rank = ({ className = "", text }) => {
  return <span className={[styles.span, className].join(" ")}>{text}</span>;
};

Rank.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default Rank;
