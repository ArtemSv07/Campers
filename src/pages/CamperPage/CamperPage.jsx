import { nanoid } from "@reduxjs/toolkit";
import { Suspense, useEffect } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

import {
  selectItem,
  selectTotalItemsError,
  selectloading,
} from "../../redux/selectorsCampers";

import { getCampersById } from "../../redux/campersOps";
import CaredCamperInfo from "../../components/CardCamperInfo/CaredCamperInfo";
import Loader from "../../components/Loader/Loader";

import clsx from "clsx";
import css from "./CamperPage.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.noActive, isActive && css.active);
};

const CamperPage = () => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const element = useSelector(selectItem);
  const isLoading = useSelector(selectloading);
  const isError = useSelector(selectTotalItemsError);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampersById(id));
  }, [dispatch, id]);

  const openImageViewer = (index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <section className={css.camperSection}>
      <h2 className="hidden">Camper page</h2>
      {!isError && isLoading && <Loader />}

      {element && (
        <div className="container">
          <div className={css.camperBox}>
            <CaredCamperInfo className={css.camperInfo} element={element} />

            <ul className={css.listImg}>
              {element.gallery.map((elem, index) => (
                <li className={css.imgCard} key={nanoid()}>
                  <div>
                    <img
                      className={css.img}
                      onClick={() => openImageViewer(index)}
                      src={elem.thumb}
                      alt={elem.name}
                    />
                  </div>
                </li>
              ))}
            </ul>

            {isViewerOpen && (
              <ImageViewer
                src={element.gallery.map((elem) => elem.thumb)}
                currentIndex={currentImage}
                onClose={closeImageViewer}
              />
            )}
            <p>{element.description}</p>
          </div>
          <div className={css.additionalInfoBox}>
            <ul className={css.link}>
              <li>
                <NavLink to="features" className={buildLinkClass}>
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink to="reviews" className={buildLinkClass}>
                  Reviews
                </NavLink>
              </li>
            </ul>
            <div className={css.outletBox}>
              <Suspense fallback={<div>Loading subpage...</div>}>
                <Outlet />
              </Suspense>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CamperPage;
