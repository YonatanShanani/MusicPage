import PropTypes from "prop-types";
import styles from "./FavoriteSongLinks.module.css";

const FavoriteSongLinks = ({ className = "" }) => {
  return (
    <div className={[styles.favoriteSongItemImagesCont, className].join(" ")}>
      <img
        className={styles.favoriteSongItemImagesContChild}
        loading="lazy"
        alt=""
        src="/frame-94@2x.png"
      />
      <div className={styles.image5Wrapper}>
        <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
      </div>
      <img
        className={styles.favoriteSongItemImagesContItem}
        loading="lazy"
        alt=""
        src="/frame-93@2x.png"
      />
    </div>
  );
};

FavoriteSongLinks.propTypes = {
  className: PropTypes.string,
};

export default FavoriteSongLinks;
