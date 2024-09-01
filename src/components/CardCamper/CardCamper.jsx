import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageViewer from "react-simple-image-viewer";
import PropTypes from "prop-types";

import CaredCamperInfo from "../CardCamperInfo/CaredCamperInfo";
import Categories from "../Categories/Categories";
import Button from "../Button/Button";
import css from "./CardCamper.module.css";

const CardCamper = ({ element }) => {
  const navigate = useNavigate();

  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handleImageClick = () => {
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  const handleClick = () => {
    navigate(`/catalog/${element.id}`);
  };

  return (
    <div className={css.cardBox}>
      <img
        className={css.img}
        src={element.gallery[0].original}
        alt={element.name}
        onClick={handleImageClick}
        style={{ cursor: "pointer" }}
      />

      {isViewerOpen && (
        <ImageViewer
          src={[element.gallery[0].original]}
          onClose={closeImageViewer}
        />
      )}

      <div className={css.infoBox}>
        <CaredCamperInfo className={css.camperInfo} element={element} />

        <p className={css.text}>
          The pictures shown here are example vehicles of the respective...
        </p>
        <Categories categories={element} />
        <Button
          handleClick={handleClick}
          name={"Show more"}
          className={css.button}
        />
      </div>
    </div>
  );
};

CardCamper.propTypes = {
  element: PropTypes.object.isRequired,
};

export default CardCamper;
