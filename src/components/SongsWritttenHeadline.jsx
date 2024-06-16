import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./SongsWritttenHeadline.module.css";

const SongsLikedHeadline = ({
  className = "",
  text,
  bHeight,
  bFontSize,
  bMargin,
  bAlignSelf,
  bTextDecoration,
}) => {
  const bStyle = useMemo(() => {
    return {
      height: bHeight,
      fontSize: bFontSize,
      margin: bMargin,
      alignSelf: bAlignSelf,
      textDecoration: bTextDecoration,
    };
  }, [bHeight, bFontSize, bMargin, bAlignSelf, bTextDecoration]);

  return (
    <b className={[styles.b, className].join(" ")} style={bStyle}>
      {text}
    </b>
  );
};

SongsLikedHeadline.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,

  /** Style props */
  bHeight: PropTypes.any,
  bFontSize: PropTypes.any,
  bMargin: PropTypes.any,
  bAlignSelf: PropTypes.any,
  bTextDecoration: PropTypes.any,
};

export default SongsLikedHeadline;
