import PropTypes from "prop-types";
import styles from "./YoutubePreview.module.css";

const YoutubePreview = ({ className = "" }) => {
  return (
    <video className={[styles.image3, className].join(" ")} controls>
      <source src="https://Youtube-preview.com" />
    </video>
  );
};

YoutubePreview.propTypes = {
  className: PropTypes.string,
};

export default YoutubePreview;
