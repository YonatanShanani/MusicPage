import PropTypes from "prop-types";
import styles from "./LargeQuote.module.css";

const LargeQuote = ({ className = "" }) => {
  return (
    <h1 className={[styles.h1, className].join(" ")}>
      “”עשה ואז עשה עוד כי המנוע לא עשוי מחומר - אלא מרוח לא נגמרת””
    </h1>
  );
};

LargeQuote.propTypes = {
  className: PropTypes.string,
};

export default LargeQuote;
