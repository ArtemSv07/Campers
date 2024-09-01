import PropTypes from "prop-types";

import ButtonChange from "../ButtonChange/ButtonChange";
import css from "./ListButton.module.css";

const ListButton = ({ array, handleSetting, equipment }) => {
  return (
    <ul className={css.list}>
      {array.map((element, index) => (
        <li key={index}>
          <ButtonChange
            equipment={equipment}
            handleSetting={handleSetting}
            name={element.name}
            path={element.path}
          />
        </li>
      ))}
    </ul>
  );
};

ListButton.propTypes = {
  array: PropTypes.array.isRequired,
  handleSetting: PropTypes.func,
  equipment: PropTypes.object,
};
export default ListButton;
