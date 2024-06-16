import SizeDefaultLabelNoneVert from "./SizeDefaultLabelNoneVert";
import PropTypes from "prop-types";
import styles from "./FallenInformation.module.css";

const FallenInformation = ({ className = "", text = "חסר מידע" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.wrapper}>
        <p className={styles.p}>
          <span>
            <span className={styles.span}>
              <b>{text}</b>
            </span>
            <span className={styles.blankLine}>
              <span>&nbsp;</span>
            </span>
            <span className={styles.span1}>
              <span>
                נולד וגדל בעיר רחובות. למד בישיבת אמי”ת עמיחי בעיר ולאחר מכן
                במכינה הקדם-צבאית “מיתרים לכיש” - בשלוחת בית גוברין. בתום שנת
                המכינה הראשונה, המשיך לשנה ב’ של למידה במדרשת הערבה בעין יהב.
              </span>
            </span>
            <span className={styles.blankLine1}>
              <span>&nbsp;</span>
            </span>
            <span className={styles.span2}>
              <span>
                מיכאל אהב מוזיקה, לטייל בארץ ובעולם, את המשפחה ואת החברים. מיכאל
                אהב ללמוד מכל אדם ומכל דבר, לקרוא ולכתוב. הוא היה אהוב על כל אדם
                שפגש בדרך, עם אינטליגנציה רגשית גבוהה שאיתה הצליח למצוא נקודות
                חיבור עם כולם, ועם חכמה ושנינות מיוחדת שהיו ייחודיות רק לו. מעל
                הכל, הוא היה בעל הומור בלתי מתפשר, אחד שידע להרים ולעודד תמיד,
                וכזה שנאמן לערכים שלו והולך בדרך המדויקת ביותר עבורו.
              </span>
            </span>
            <span className={styles.blankLine2}>
              <span>&nbsp;</span>
            </span>
            <span className={styles.span3}>
              <span>
                הוא היה בן זוג מושלם, עוטף ומכיל ששם את בת הזוג שלו, תמר, במקום
                הראשון. אהוב ונאהב בקרב המשפחה, החברים וכל מי שפגש בו.
              </span>
            </span>
            <span className={styles.blankLine3}>
              <span>&nbsp;</span>
            </span>
            <span className={styles.span4}>
              <span>
                מיכאל היה לוחם ומפקד, שאהב את הארץ ואת היושבים בה, והיה מוכן
                להקריב את חייו על מנת להגן על חייליו, חבריו ואזרחי קיבוץ
                כיסופים. הוא היה בן 21 בנופלו ונהרג שבוע לפני שהיה אמור להשתחרר
                משירותו הסדיר, רגע לפני שהגשים את החלומות שתכנן לאחר השחרור.
              </span>
            </span>
          </span>
        </p>
      </div>
      <SizeDefaultLabelNoneVert
        sizeDefaultLabelNoneVertWidth="unset"
        sizeDefaultLabelNoneVertAlignSelf="stretch"
        sizeDefaultLabelNoneVertPosition="relative"
      />
    </div>
  );
};

FallenInformation.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default FallenInformation;
