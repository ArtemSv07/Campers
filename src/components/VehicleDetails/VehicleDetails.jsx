import { useSelector } from "react-redux";
import { selectItem } from "../../redux/selectorsCampers";

import css from "./VehicleDetails.module.css";

const VehicleDetails = () => {
  const element = useSelector(selectItem);

  return (
    <div>
      <h3 className={css.title}>Vehicle details</h3>
      <ul className={css.list}>
        <li className={css.li}>
          <p className="pMedium">Form</p>
          <p className="pMedium">{element.form}</p>
        </li>
        <li className={css.li}>
          <p className="pMedium">Length</p>
          <p className="pMedium">{element.length}</p>
        </li>
        <li className={css.li}>
          <p className="pMedium">Width</p>
          <p className="pMedium">{element.width}</p>
        </li>
        <li className={css.li}>
          <p className="pMedium">Height</p>
          <p className="pMedium">{element.height}</p>
        </li>
        <li className={css.li}>
          <p className="pMedium">Tank</p>
          <p className="pMedium">{element.tank}</p>
        </li>
        <li className={css.li}>
          <p className="pMedium">Consumption</p>
          <p className="pMedium">{element.consumption}</p>
        </li>
      </ul>
    </div>
  );
};

export default VehicleDetails;
