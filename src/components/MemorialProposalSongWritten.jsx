import PropTypes from "prop-types";
import "./MemorialProposalSongWritten.css";

const MemorialProposalSongWritten = ({ className = "" }) => {
  return (
    <a
      className={`a3 ${className}`}
      href="mailto:family@gmail.com?subject=הצעת הנצחה"
    >
      <b className="b16">
        <span className="txt4">
          {`להצעת הנצחה `}
          <span className="span4">לחצו כאן</span>
        </span>
      </b>
    </a>
  );
};

MemorialProposalSongWritten.propTypes = {
  className: PropTypes.string,
};

export default MemorialProposalSongWritten;
