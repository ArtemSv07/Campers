import PropTypes from "prop-types";
import css from "./Categories.module.css";

const iconsPath = {
  TV: "TV",
  bathroom: "bathroom",
  AC: "AC",
  kitchen: "kitchen",
  automatic: "transmission",
  manual: "transmission",
  radio: "radio",
  diesel: "engine",
  petrol: "engine",
  hybrid: "engine",
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
            <img
              width={20}
              height={20}
              src={`/src/icons/${iconsPath[element]}.svg`}
              alt=""
            />
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
  categories: PropTypes.object,
};
export default Categories;
