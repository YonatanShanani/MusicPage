import PropTypes from "prop-types";
import styles from "./DateOfFall.module.css";

const DateOfFall = ({ className = "", text }) => {
  return <h2 className={[styles.h2, className].join(" ")}>{text}</h2>;
};

DateOfFall.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default DateOfFall;
