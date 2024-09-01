import { MdEuro } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";
import clsx from "clsx";

import { addLikes, deleteLikes } from "../../redux/filtersCampersSlice";
import { selectLikeItems } from "../../redux/filtersCampersSlice";
import Location from "../Location/Location";
import css from "./CaredCamperInfo.module.css";

const CaredCamperInfo = ({ element, className }) => {
  const [toggleHeart, setToggleHeart] = useState(false);

  const likesId = useSelector(selectLikeItems);

  useEffect(() => {
    if (likesId.includes(element.id)) {
      setToggleHeart(true);
    }
  }, [likesId, element.id]);

  const dispatch = useDispatch();

  const handleClickHeart = () => {
    setToggleHeart(!toggleHeart);
    if (!toggleHeart) {
      dispatch(addLikes(element.id));
    } else {
      dispatch(deleteLikes(element.id));
    }
  };
  return (
    <div className={clsx(css.titleBox, className)}>
      <div>
        <h2 className={css.title}>{element.name}</h2>
        <div className={clsx(className, css.grup)}>
          <FaStar className={css.star} />
          <p className={css.text}>{element.rating}</p>
          <p
            className={clsx(css.text, css.marg)}
          >{`(${element.reviews.length} Reviews)`}</p>
          <Location location={element.location} />
        </div>
      </div>

      <h2 className={clsx(css.price, css.title)}>
        <MdEuro className={css.title} />
        {`${element.price}.00`}
        <button onClick={handleClickHeart} className={css.buttonHeart}>
          <BsSuitHeart className={toggleHeart ? css.red : css.black} />
        </button>
      </h2>
    </div>
  );
};

CaredCamperInfo.propTypes = {
  element: PropTypes.object,
  className: PropTypes.any,
};

export default CaredCamperInfo;
