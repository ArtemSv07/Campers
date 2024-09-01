import clsx from "clsx";
import css from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ handleClick, name, className, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={clsx(css.button, className)}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
