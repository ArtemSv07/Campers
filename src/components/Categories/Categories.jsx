import PropTypes from "prop-types";
import css from "./Categories.module.css";

import TV from "../../icons/TV.svg";
import Bathroom from "../../icons/bathroom.svg";
import AC from "../../icons/AC.svg";
import Kitchen from "../../icons/kitchen.svg";
import Automatic from "../../icons/transmission.svg";
import Manual from "../../icons/transmission.svg";
import Radio from "../../icons/radio.svg";
import Engine from "../../icons/engine.svg";

const getIcon = (category) => {
  switch (category) {
    case "TV":
      return TV;
    case "bathroom":
      return Bathroom;
    case "AC":
      return AC;
    case "kitchen":
      return Kitchen;
    case "automatic":
      return Automatic;
    case "manual":
      return Manual;
    case "radio":
      return Radio;
    case "diesel":
    case "petrol":
    case "hybrid":
      return Engine;
    default:
      return null;
  }
};

const Categories = ({ categories }) => {
  const trueKeys = Object.keys(categories).filter(
    (key) =>
      categories[key] === true &&
      key !== "refrigerator" &&
      key !== "microwave" &&
      key !== "gas" &&
      key !== "water"
  );

  const allKeys = [categories.transmission, categories.engine, ...trueKeys];

  return (
    <ul className={css.list}>
      {allKeys.map((element, index) => (
        <li key={index}>
          <div className={css.box}>
            <img width={20} height={20} src={getIcon(element)} alt={element} />
            <p className="pMedium">
              {element.charAt(0).toUpperCase() + element.slice(1)}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

Categories.propTypes = {
  categories: PropTypes.object.isRequired,
};

export default Categories;
