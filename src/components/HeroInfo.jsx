import PropTypes from "prop-types";
import styles from "./HeroInfo.module.css";

const HeroInfo = ({ className = "" }) => {
  return (
    <div className={[styles.heroInfo, className].join(" ")}>
      <div className={styles.heroInfoInner}>
        <div className={styles.heroQuoteParent}>
          <div className={styles.heroQuote}>
            <div className={styles.wrapper}>
              <h1 className={styles.h1}>
                “”עשה ואז עשה עוד כי המנוע לא עשוי מחומר - אלא מרוח לא נגמרת””
              </h1>
            </div>
            <div className={styles.contactFamily}>
              <div className={styles.contactButton}>
                <u className={styles.u}>לחצו כאן</u>
              </div>
              <div className={styles.contactButton1}>
                <div className={styles.div}>ליצירת קשר עם נציג המשפחה</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.cityParent}>
                <div className={styles.city}>
                  <div className={styles.container}>
                    <b className={styles.b}>רחובות, ישראל</b>
                  </div>
                </div>
                <button className={styles.unitDetails}>
                  <div className={styles.frame}>
                    <b className={styles.b1}>חטיבת גולני</b>
                  </div>
                </button>
                <div className={styles.unitDetails1}>
                  <div className={styles.frameDiv}>
                    <div className={styles.div1}>מלחמת חרבות ברזל</div>
                  </div>
                </div>
              </div>
              <div className={styles.heroNameContainerParent}>
                <div className={styles.heroNameContainer}>
                  <div className={styles.div2}>
                    <span>{`סמ”ר `}</span>
                    <span className={styles.span}>מיכאל בן חמו ז”ל</span>
                  </div>
                </div>
                <div className={styles.wrapper1}>
                  <h2 className={styles.h2}>
                    נפל בכ”ב בתשרי התשפ”ד (07 באוקטובר 2023)
                  </h2>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <img
                className={styles.heroImageChild}
                loading="lazy"
                alt=""
                src="/ellipse-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroInfoChild}>
        <div className={styles.frameContainer}>
          <div className={styles.wrapper2}>
            <p className={styles.p}>
              <span>
                <span className={styles.span1}>
                  <b>
                    מיכאל בן חמו היה בן אהוב ליעל ומאיר, אח לאוהד, נועה ואסף ובן
                    זוגה של תמר.
                  </b>
                </span>
                <span className={styles.blankLine}>
                  <span>&nbsp;</span>
                </span>
                <span className={styles.span2}>
                  <span>
                    נולד וגדל בעיר רחובות. למד בישיבת אמי”ת עמיחי בעיר ולאחר מכן
                    במכינה הקדם-צבאית “מיתרים לכיש” - בשלוחת בית גוברין. בתום
                    שנת המכינה הראשונה, המשיך לשנה ב’ של למידה במדרשת הערבה בעין
                    יהב.
                  </span>
                </span>
                <span className={styles.blankLine1}>
                  <span>&nbsp;</span>
                </span>
                <span className={styles.span3}>
                  <span>
                    מיכאל אהב מוזיקה, לטייל בארץ ובעולם, את המשפחה ואת החברים.
                    מיכאל אהב ללמוד מכל אדם ומכל דבר, לקרוא ולכתוב. הוא היה אהוב
                    על כל אדם שפגש בדרך, עם אינטליגנציה רגשית גבוהה שאיתה הצליח
                    למצוא נקודות חיבור עם כולם, ועם חכמה ושנינות מיוחדת שהיו
                    ייחודיות רק לו. מעל הכל, הוא היה בעל הומור בלתי מתפשר, אחד
                    שידע להרים ולעודד תמיד, וכזה שנאמן לערכים שלו והולך בדרך
                    המדויקת ביותר עבורו.
                  </span>
                </span>
                <span className={styles.blankLine2}>
                  <span>&nbsp;</span>
                </span>
                <span className={styles.span4}>
                  <span>
                    הוא היה בן זוג מושלם, עוטף ומכיל ששם את בת הזוג שלו, תמר,
                    במקום הראשון. אהוב ונאהב בקרב המשפחה, החברים וכל מי שפגש בו.
                  </span>
                </span>
                <span className={styles.blankLine3}>
                  <span>&nbsp;</span>
                </span>
                <span className={styles.span5}>
                  <span>
                    מיכאל היה לוחם ומפקד, שאהב את הארץ ואת היושבים בה, והיה מוכן
                    להקריב את חייו על מנת להגן על חייליו, חבריו ואזרחי קיבוץ
                    כיסופים. הוא היה בן 21 בנופלו ונהרג שבוע לפני שהיה אמור
                    להשתחרר משירותו הסדיר, רגע לפני שהגשים את החלומות שתכנן לאחר
                    השחרור.
                  </span>
                </span>
              </span>
            </p>
          </div>
          <div className={styles.divider} />
        </div>
      </div>
      <div className={styles.memoryCategoriesParent}>
        <div className={styles.memoryCategories}>
          <div className={styles.categoryNames}>
            <b className={styles.b2}>עוד...</b>
            <div className={styles.divider1} />
          </div>
        </div>
        <div className={styles.memoryCategories1}>
          <div className={styles.parent}>
            <b className={styles.b3}>{`ציטוטים `}</b>
            <div className={styles.divider2} />
          </div>
        </div>
        <div className={styles.memoryCategories2}>
          <div className={styles.group}>
            <b className={styles.b4}>זוכרים בספורט</b>
            <div className={styles.divider3} />
          </div>
        </div>
        <div className={styles.musicContentWrapper}>
          <div className={styles.musicContent}>
            <div className={styles.wrapper3}>
              <h2 className={styles.h21}>זוכרים עם מוסיקה</h2>
            </div>
            <div className={styles.divider4} />
          </div>
        </div>
      </div>
    </div>
  );
};

HeroInfo.propTypes = {
  className: PropTypes.string,
};

export default HeroInfo;
