import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useSelector } from "react-redux";

import css from "./ButtonChange.module.css";
import { selectloading } from "../../redux/selectorsCampers";

const ButtonChange = (props) => {
  const [toggle, setToggle] = useState(false);
  const isLoading = useSelector(selectloading);

  const handleClick = () => {
    setToggle(!toggle);
    !toggle
      ? props.handleSetting(props.name, true)
      : props.handleSetting(props.name, false);
  };

  useEffect(() => {
    if (isLoading) {
      setToggle(false);
    }
  }, [isLoading]);
  return (
    <button
      onClick={handleClick}
      className={clsx(
        css.button,
        toggle &&
          props.name !== "Van" &&
          props.name !== "Fully Integrated" &&
          props.name !== "Alcove" &&
          css.onButton,

        props.name === "Van" &&
          props.equipment.form === "panelTruck" &&
          css.onButton,

        props.name === "Fully Integrated" &&
          props.equipment.form === "fullyIntegrated" &&
          css.onButton,

        props.name === "Alcove" &&
          props.equipment.form === "alcove" &&
          css.onButton
      )}
    >
      <img src={props.path} alt={props.name} />
      <span>{props.name}</span>
    </button>
  );
};

ButtonChange.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  handleSetting: PropTypes.func,
  equipment: PropTypes.object,
};

export default ButtonChange;
