import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./SizeDefaultLabelNoneVert.module.css";

const SizeDefaultLabelNoneVert = ({
  className = "",
  sizeDefaultLabelNoneVertWidth,
  sizeDefaultLabelNoneVertAlignSelf,
  sizeDefaultLabelNoneVertPosition,
}) => {
  const sizeDefaultLabelNoneVertStyle = useMemo(() => {
    return {
      width: sizeDefaultLabelNoneVertWidth,
      alignSelf: sizeDefaultLabelNoneVertAlignSelf,
      position: sizeDefaultLabelNoneVertPosition,
    };
  }, [
    sizeDefaultLabelNoneVertWidth,
    sizeDefaultLabelNoneVertAlignSelf,
    sizeDefaultLabelNoneVertPosition,
  ]);

  return (
    <div
      className={[styles.sizedefaultLabelnoneVert, className].join(" ")}
      style={sizeDefaultLabelNoneVertStyle}
    />
  );
};

SizeDefaultLabelNoneVert.propTypes = {
  className: PropTypes.string,

  /** Style props */
  sizeDefaultLabelNoneVertWidth: PropTypes.any,
  sizeDefaultLabelNoneVertAlignSelf: PropTypes.any,
  sizeDefaultLabelNoneVertPosition: PropTypes.any,
};

export default SizeDefaultLabelNoneVert;
