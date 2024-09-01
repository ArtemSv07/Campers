import { useEffect, useRef, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getCampers } from "../../redux/campersOps";
import { selectItems, selectTotalItems } from "../../redux/selectorsCampers";
import { selectLikeItems } from "../../redux/filtersCampersSlice";
import {
  selectItemsCampers,
  selectLikeToggle,
} from "../../redux/filtersCampersSlice";
import {
  selectTotalItemsError,
  selectloading,
} from "../../redux/selectorsCampers";

import Button from "../Button/Button";
import CardCamper from "../CardCamper/CardCamper";
import Loader from "../Loader/Loader";
import css from "./CampersItems.module.css";

const CampersItems = () => {
  const [limit, setlimit] = useState(4);
  const dispatch = useDispatch();

  const equipment = useSelector(selectItemsCampers);
  const isLoading = useSelector(selectloading);

  const istoggleLikes = useSelector(selectLikeToggle);
  const listLikesId = useSelector(selectLikeItems);
  const itemsCampers = useSelector(selectItems);
  const TotalItems = useSelector(selectTotalItems);
  const isError = useSelector(selectTotalItemsError);

  const newItemsRef = useRef(null);

  useEffect(() => {
    if (!istoggleLikes) {
      dispatch(getCampers({ limit, equipment }));
    } else {
      dispatch(getCampers({ equipment }));
    }
  }, [dispatch, limit, equipment, istoggleLikes]);

  const handleClick = () => {
    setlimit((prevLimit) => prevLimit + 4);
  };

  const filteredItems = itemsCampers.filter((item) =>
    listLikesId.includes(item.id)
  );

  useEffect(() => {
    if (limit > 4 && newItemsRef.current) {
      newItemsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [itemsCampers]);

  useEffect(() => {
    if (isError) {
      toast.error("Not found");
    }
  }, [isError]);

  return (
    <div className={css.div}>
      <ToastContainer draggable closeOnClick position="top-right" />
      <ul className={css.list}>
        {(istoggleLikes ? filteredItems : itemsCampers).map(
          (element, index) => (
            <li key={nanoid()} ref={index === limit - 4 ? newItemsRef : null}>
              <CardCamper element={element} />
            </li>
          )
        )}
      </ul>
      {!isError && isLoading && <Loader />}
      {itemsCampers.length !== TotalItems && !isError && !isLoading && (
        <Button
          handleClick={handleClick}
          name="Load more"
          className={css.button}
        />
      )}
    </div>
  );
};

export default CampersItems;
