import PropTypes from "prop-types";
import Map from "../../icons/mapBlack.svg";

import css from "./Location.module.css";

const Location = ({ location }) => {
  const rearrangedLocation = location.split(", ").reverse().join(", ");

  return (
    <div className={css.box}>
      <img className={css.map} src={Map} alt="map" />
      <p className={css.text}>{rearrangedLocation}</p>
    </div>
  );
};

Location.propTypes = {
  location: PropTypes.string,
};

export default Location;
