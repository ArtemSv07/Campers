import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCampers } from "../../redux/campersOps";
import { addFilter } from "../../redux/filtersCampersSlice";

import LocationInput from "../LocationInput/LocationInput";
import ListButton from "../ListButton/ListButton";
import Button from "../Button/Button";

import clsx from "clsx";
import css from "./SettingsBox.module.css";

const EQUIPMENT = [
  { name: "AC", path: "../../icons/symbol-defs.svg#icon-AC" },
  { name: "Automatic", path: "../../icons/symbol-defs.svg#icon-transmission" },
  { name: "kitchen", path: "../../icons/symbol-defs.svg#icon-kitchen" },
  { name: "TV", path: "../../icons/symbol-defs.svg#icon-TV" },
  { name: "bathroom", path: "../../icons/symbol-defs.svg#icon-bathroom" },
];

const TYPE = [
  { name: "Van", path: "/src/icons/grid1.svg" },
  { name: "Fully Integrated", path: "/src/icons/grid2.svg" },
  { name: "Alcove", path: "/src/icons/grid3.svg" },
];

import PropTypes from "prop-types";

const SettingsBox = ({ handleModalOpen, modalOpen }) => {
  const [equipment, setEquipment] = useState({});
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleInput = (value) => {
    setInputValue(value);

    setEquipment((prevEquipment) => {
      const newEquipment = { ...prevEquipment };
      if (value) {
        newEquipment["location"] = value;
      } else {
        delete newEquipment["location"];
      }
      return newEquipment;
    });
  };

  const handleSetting = (name, boolean) => {
    setEquipment((prevFilters) => {
      const newFilters = { ...prevFilters };

      if (name === "Automatic" && boolean) {
        newFilters["transmission"] = "automatic";
        return newFilters;
      } else if (name === "Automatic" && !boolean) {
        delete newFilters["transmission"];
        return newFilters;
      }

      if (name === "Van" || name === "Fully Integrated" || name === "Alcove") {
        if (boolean) {
          newFilters["form"] =
            name === "Van"
              ? "panelTruck"
              : name === "Fully Integrated"
              ? "fullyIntegrated"
              : "alcove";
        } else {
          delete newFilters["form"];
        }
        return newFilters;
      }

      if (boolean) {
        newFilters[name] = boolean;
      } else {
        delete newFilters[name];
      }
      return newFilters;
    });
  };

  const handleClick = () => {
    dispatch(addFilter(equipment));
    dispatch(getCampers({ equipment }));
    setEquipment({});
    setInputValue("");
    handleModalOpen();
  };

  return (
    <div
      className={clsx(
        css.settingsBox,
        !modalOpen ? css.clouseMod : css.modalOpen
      )}
    >
      <LocationInput inputValue={inputValue} handleInput={handleInput} />

      <h4 className={css.title4}>Filters</h4>
      <h3 className={css.title3}>Vehicle equipment</h3>

      <ListButton
        equipment={equipment}
        handleSetting={handleSetting}
        array={EQUIPMENT}
      />

      <h3 className={css.title3}>Vehicle type</h3>
      <ListButton
        equipment={equipment}
        handleSetting={handleSetting}
        array={TYPE}
      />
      <Button handleClick={handleClick} name="Search" className={css.button} />
    </div>
  );
};

SettingsBox.propTypes = {
  handleModalOpen: PropTypes.func,
  modalOpen: PropTypes.bool,
};

export default SettingsBox;
