import PropTypes from "prop-types";
import css from "./Layout.module.css";
import AppBar from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
