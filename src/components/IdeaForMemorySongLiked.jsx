import PropTypes from "prop-types";
import "./IdeaForMemorySongLiked.css";

const IdeaForMemorySongLiked = ({ className = "" }) => {
  return (
    <a
      className={`a1 ${className}`}
      href="mailto:family@gmail.com?subject=הצעת הנצחה"
    >
      <b className="b14">
        <span className="txt3">
          {`להצעת הנצחה `}
          <span className="span3">לחצו כאן</span>
        </span>
      </b>
    </a>
  );
};

IdeaForMemorySongLiked.propTypes = {
  className: PropTypes.string,
};

export default IdeaForMemorySongLiked;
