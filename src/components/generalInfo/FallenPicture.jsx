import PropTypes from "prop-types";
import styles from "./FallenPicture.module.css";

const FallenPicture = ({ className = "" }) => {
  return (
    <img
      className={[styles.heroImageChild, className].join(" ")}
      loading="lazy"
      alt=""
      src="/ellipse-1@2x.png"
    />
  );
};

FallenPicture.propTypes = {
  className: PropTypes.string,
};

export default FallenPicture;
