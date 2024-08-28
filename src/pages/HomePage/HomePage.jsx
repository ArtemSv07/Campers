import { useNavigate } from "react-router-dom";

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
        <button onClick={handleClick} className={css.button}>
          <span>View</span> <span>Now</span>
        </button>
      </div>
    </section>
  );
};

export default HomePage;
