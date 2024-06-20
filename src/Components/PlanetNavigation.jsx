import React from "react";
import { Link } from "react-router-dom";
import UiButton from "./UI/UIButton/UiButton";

function PlanetNavigation({ getPlanets, previosPage, nextPage, countPage }) {
  const handleChangeNext = () => getPlanets(nextPage);
  const handleChangePrev = () => getPlanets(previosPage);
  return (
    <>
      <Link to={`/planets/?page=${countPage - 1}`}>
        <UiButton
          text="Previous"
          onClick={handleChangePrev}
          disabled={!previosPage}
        ></UiButton>
      </Link>
      <Link to={`/planets/?page=${countPage + 1}`}>
        <UiButton
          text="Next"
          onClick={handleChangeNext}
          disabled={!nextPage}
        ></UiButton>
      </Link>
    </>
  );
}
export default PlanetNavigation;
