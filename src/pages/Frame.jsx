import Header from "../components/Header";
import HeroInfo from "../components/HeroInfo";
import ASongToMemory from "../components/ASongToMemory";
import LovedSongs from "../components/LovedSongs";
import styles from "./Frame.module.css";

const Frame = () => {
  return (
    <div className={styles.div}>
      <section className={styles.frameParent}>
        <Header />
        <HeroInfo />
      </section>
      <section className={styles.inner}>
        <div className={styles.parent}>
          <b className={styles.b}>שירים לזכרו</b>
          <ASongToMemory />
          <h1 className={styles.h1}>שירים שאהב</h1>
          <LovedSongs />
        </div>
      </section>
    </div>
  );
};

export default Frame;
