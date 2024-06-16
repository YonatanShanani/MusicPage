import Rank from "./Rank";
import  from "./Component";
import DateOfFall from "./DateOfFall";
import PropTypes from "prop-types";
import styles from './NameAndFallDate.module.css';


const NameAndFallDate = ({ className="" }) => {
  return (
    <div className={[styles.heroNameContainerParent, className].join(' ')}>
      <div className={styles.heroNameContainer}>
        <div className={styles.div}><Rank text="סמ”ר " /><NameOfFallen text="מיכאל בן חמו ז”ל" />
        </div>
      </div>
      <div className={styles.wrapper}><DateOfFall text="נפל בכ”ב בתשרי התשפ”ד (07 באוקטובר 2023)" />
      </div>
    </div>);
};

NameAndFallDate.propTypes = {
  className: PropTypes.string
};

export default NameAndFallDate;
