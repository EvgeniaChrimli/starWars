import React from "react";
import styles from "../Styles/PeopleNavigation.module.css";
import { Link } from "react-router-dom";
import UiButton from "./UI/UIButton/UiButton";

function PeopleNavigation({ getData, nextPage, previosPage, countPage }) {
  const handleChangeNext = () => getData(nextPage);
  const handleChangePrev = () => getData(previosPage);
  return (
    <>
      <Link to={`/people/?page=${countPage - 1}`} className={styles.link}>
        <UiButton
          text="Previous"
          onClick={handleChangePrev}
          disabled={!previosPage}
        />
      </Link>
      <Link to={`/people/?page=${countPage + 1}`} className={styles.link}>
        <UiButton text="Next" onClick={handleChangeNext} disabled={!nextPage} />
      </Link>
    </>
  );
}
export default PeopleNavigation;
