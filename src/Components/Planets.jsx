import React from "react";
import LinkBack from "../Components/linkBack/LinkBack";
import { getApiResource } from "../utils/network";
import { API_PLANETS } from "../Constants/api";
import {
  getPlanetImage,
  getPlanetlId,
  getCurrentCount,
} from "../services/getPeopleData";
import styles from "../Styles/Planets.module.css";

import PlanetsAll from "./PlanetsAll";
import PlanetNavigation from "./PlanetNavigation";
function Planets() {
  const [planets, setPlanets] = React.useState([]);
  const [previosPage, setPreviosPage] = React.useState();
  const [nextPage, setNextPage] = React.useState();
  const [countPage, setCountPage] = React.useState(1);

  const getPlanets = async (url) => {
    const res = await getApiResource(url);
    console.log(res);

    try {
      const planetsList = res.results.map(({ name, url }) => {
        const id = getPlanetlId(url);
        const img = getPlanetImage(id);
        return { id, img, name };
      });
      setPlanets(planetsList);
      setPreviosPage(res.previous);
      setNextPage(res.next);
      setCountPage(getCurrentCount(url));
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getPlanets(API_PLANETS + `${countPage}`);
    console.log(API_PLANETS);
  }, [countPage]);
  return (
    <>
      <div className={styles.wrapper}>
        <LinkBack />
        <div className={styles.container}>
          <div className={styles.row}>
            <PlanetNavigation
              getPlanets={getPlanets}
              previosPage={previosPage}
              nextPage={nextPage}
              countPage={countPage}
            />
          </div>
          <PlanetsAll planets={planets} />
        </div>
      </div>
    </>
  );
}
export default Planets;
