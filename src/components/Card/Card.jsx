import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ data }) => {
  return (
    <div className="card">
      <h5 className="plan">{data.plan}</h5>
      <h2 className="pricing">{data.price}</h2>
      <div className="line"></div>
      <div className="features-container">
        {data.features.map((feature, index) => {
          return (
            <p
              key={index}
              className={feature.isIncluded ? "feature" : "feature-disabled"}
            >
              {feature.isIncluded ? <FaCheck /> : <ImCross />} {feature.title}
            </p>
          );
        })}
      </div>
      <button className="btn">BUTTON</button>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.node,
};

export default Card;
