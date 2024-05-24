// Imports for icons
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

// Importing Custom CSS for the Card Component.
import "./Card.css";

// Prop types package is imported to mitigate the error that occurred saying "Props is missing in Props validation."
import PropTypes from "prop-types";

const Card = ({ data }) => {
  return (
    <div className="card">
      <h5 className="plan">{data.plan}</h5>
      <h2 className="pricing">{data.price}</h2>
      <div className="line"></div>
      <div className="features-container">
        {/* Iterating through the features */}
        {data.features.map((feature, index) => {
          return (
            <p
              key={index}
              className={feature.isIncluded ? "feature" : "feature-disabled"} //Conditionally rendering a style for the tag
            >
              {feature.isIncluded ? <FaCheck /> : <ImCross />} {feature.title}
              {/* Conditionally rendering an icon. */}
            </p>
          );
        })}
      </div>
      <button className="btn">BUTTON</button>
    </div>
  );
};

// Defining prop types for validation.
Card.propTypes = {
  data: PropTypes.node,
};

export default Card;
