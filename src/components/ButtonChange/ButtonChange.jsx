import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { useSelector } from "react-redux";

import css from "./ButtonChange.module.css";
import { selectloading } from "../../redux/selectorsCampers";

import AC from "../../icons/AC.svg";
import Automatic from "../../icons/transmission.svg";
import Bathroom from "../../icons/bathroom.svg";
import Kitchen from "../../icons/kitchen.svg";
import TV from "../../icons/TV.svg";

import Van from "../../icons/grid1.svg";
import Full from "../../icons/grid2.svg";
import Alcove from "../../icons/grid3.svg";

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

  const getIcon = (name) => {
    switch (name) {
      case "AC":
        return AC;
      case "Automatic":
        return Automatic;
      case "bathroom":
        return Bathroom;
      case "kitchen":
        return Kitchen;
      case "TV":
        return TV;
      case "Van":
        return Van;
      case "Fully Integrated":
        return Full;
      case "Alcove":
        return Alcove;
      default:
        return null;
    }
  };

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
      <img src={getIcon(props.name)} alt={props.name} />
      <span>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</span>
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
