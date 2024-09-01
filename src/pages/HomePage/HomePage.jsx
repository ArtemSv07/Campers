import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

import css from "./HomePage.module.css";
import clsx from "clsx";

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/catalog");
  };

  return (
    <section className={css.homeSection}>
      <div className={css.imageOverlay}></div>
      <div className={clsx("container", css.container)}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <h2 className={css.infoTitle}>
          You can find everything you want in our catalog
        </h2>
        <Button
          className={css.button}
          handleClick={handleClick}
          name="View Now"
        />
      </div>
    </section>
  );
};

export default HomePage;
