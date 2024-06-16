import PropTypes from "prop-types";
import "./ContactTheFamilyLink.css";

const ContactTheFamilyLink = ({ className = "" }) => {
  return (
    <a
      className={`a4 ${className}`}
      href="mailto:family@gmail.com?subject=זוכרים ביחד"
    >
      לחצו כאן
    </a>
  );
};

ContactTheFamilyLink.propTypes = {
  className: PropTypes.string,
};

export default ContactTheFamilyLink;
