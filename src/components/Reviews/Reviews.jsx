import { FaStar } from "react-icons/fa";
import ReservationForm from "../ReservationForm/ReservationForm";
import { useSelector } from "react-redux";
import { selectItem } from "../../redux/selectorsCampers";
import { nanoid } from "@reduxjs/toolkit";

import clsx from "clsx";
import css from "./Reviews.module.css";

const Reviews = () => {
  const reviews = useSelector(selectItem);
  const countStar = [1, 2, 3, 4, 5];

  return (
    <div className={css.div}>
      <div>
        <ul className={css.ul}>
          {reviews.reviews.map((elem) => (
            <li key={nanoid()}>
              <div className={css.reviewBox}>
                <div className={css.letterBox}>
                  <h2>{elem.reviewer_name.charAt(0).toUpperCase()}</h2>
                </div>
                <div>
                  <h4 className={css.h4}>{elem.reviewer_name}</h4>
                  <div>
                    <ul className={css.listStar}>
                      {countStar.map((numb) => (
                        <li key={nanoid()}>
                          <FaStar
                            className={clsx(
                              css.defaulStar,
                              numb <= elem.reviewer_rating && css.goldStar
                            )}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <p>{elem.comment}</p>
            </li>
          ))}
        </ul>
      </div>

      <ReservationForm />
    </div>
  );
};

export default Reviews;
