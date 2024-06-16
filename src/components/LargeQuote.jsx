import PropTypes from "prop-types";
import styles from "./LargeQuote.module.css";

const LargeQuote = ({ className = "", text }) => {
  return <h1 className={[styles.h1, className].join(" ")}>{text}</h1>;
};

LargeQuote.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default LargeQuote;
