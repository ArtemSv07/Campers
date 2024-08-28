import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

import Logo from "../../../public/logo.svg";
import css from "./Header.module.css";
import clsx from "clsx";

const AppBar = () => {
  return (
    <header className={css.header}>
      <div className={clsx("container", css.headerContainer)}>
        <Link to="/" className={css.logo}>
          <img src={Logo} alt="Logo" className={css.logoImage} />
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default AppBar;
