import PropTypes from "prop-types";
import { features } from "../../constants";
import styles, { layout } from "../../style";
import Button from "../Button";

const Business = () => (
  <section id="features" className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        You do the business, <br className={`sm:block hidden`} /> we&lsquo;ll
        handle the money.
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>

      <Button styles="mt-10" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feat, ind) => (
        <FeatureCard key={feat.id} {...feat} ind={ind} />
      ))}
    </div>
  </section>
);

const FeatureCard = ({ icon, title, content, ind }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] feature-card ${
      ind !== features.length - 1 && "mb-6"
    }`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className={`w-[50%] h-[50%] object-contain`} />
    </div>

    <div className={`flex-1 flex flex-col ml-3`}>
      <h3
        className={`font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1`}
      >
        {title}
      </h3>
      <p
        className={`font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1`}
      >
        {content}
      </p>
    </div>
  </div>
);

FeatureCard.propTypes = {
  icon: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  ind: PropTypes.number.isRequired,
};

export default Business;
