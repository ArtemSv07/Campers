import { ColorRing } from "react-loader-spinner";
import PropTypes from "prop-types";

import css from "./Loader.module.css";

const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperClass={css.colorRingWrapper}
      colors={["#475467", "#6c717b", "#ffc531", "#475467", "#859398"]}
    />
  );
};

Loader.propTypes = {
  className: PropTypes.string,
};

export default Loader;
