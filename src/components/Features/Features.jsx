import { useSelector } from "react-redux";

import { selectItem } from "../../redux/selectorsCampers";
import Categories from "../Categories/Categories";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import ReservationForm from "../ReservationForm/ReservationForm";
import css from "./Features.module.css";

const Features = () => {
  const element = useSelector(selectItem);
  return (
    <div className={css.div}>
      <div className={css.featureBox}>
        <Categories categories={element} />
        <VehicleDetails />
      </div>

      <ReservationForm />
    </div>
  );
};

export default Features;
