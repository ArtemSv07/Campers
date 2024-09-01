import { BsFillSuitHeartFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { addToggle, selectLikeItems } from "../../redux/filtersCampersSlice";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

import SettingsBox from "../../components/SettingsBox/SettingsBox";
import CampersItems from "../../components/CampersItems/CampersItems";

import clsx from "clsx";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const [toggle, setToggle] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const isLikes = useSelector(selectLikeItems);
  const dispatch = useDispatch();

  const handleClick = () => {
    setToggle(!toggle);
    dispatch(addToggle(toggle));
  };

  useEffect(() => {
    if (isLikes.length === 0 && !toggle) {
      setToggle(!toggle);
      dispatch(addToggle(toggle));
    }
  }, [isLikes, toggle, dispatch]);

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <section className={css.section}>
      <div className={clsx("container", css.catalogBox)}>
        <button onClick={handleModalOpen} className={css.burgerButton}>
          <RxHamburgerMenu />
        </button>

        <h2 className="hidden">catalog campers page</h2>

        <SettingsBox handleModalOpen={handleModalOpen} modalOpen={modalOpen} />

        <CampersItems />
        {isLikes.length > 0 && (
          <button onClick={handleClick} className={css.buttonHeart}>
            <BsFillSuitHeartFill
              className={clsx(
                css.heartIcon,
                !toggle ? css.heartIconNotActive : css.heartIconActive
              )}
            />
          </button>
        )}
      </div>
    </section>
  );
};

export default CatalogPage;
