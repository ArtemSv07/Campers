import clsx from "clsx";
import iconMap from "../../icons/Map.svg";
import iconMapActive from "../../icons/MapActive.svg";
import PropTypes from "prop-types";

import css from "./LocationInput.module.css";

const InputLocal = ({ handleInput, inputValue }) => {
  const handleChange = (e) => {
    const value = e.target.value;

    handleInput(value);
  };
  return (
    <div>
      <label className={css.label} htmlFor="name">
        Location
      </label>
      <div className={css.inputWrapper}>
        <input
          onChange={handleChange}
          className={clsx("inputLocal", css.inputModal)}
          placeholder="City"
          type="text"
          id="name"
          name="name"
          value={inputValue}
        />

        <img
          src={inputValue ? iconMapActive : iconMap}
          alt="Logo"
          className={css.mapIcon}
        />
      </div>
    </div>
  );
};

InputLocal.propTypes = {
  handleInput: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
};

export default InputLocal;
