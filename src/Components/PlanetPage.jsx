import React from "react";
import LinkBack from "../Components/linkBack/LinkBack";
import { useParams } from "react-router-dom";
import { getApiResource } from "../utils/network";
import { PLANETS } from "../Constants/api";
import { getPlanetImage } from "../services/getPeopleData";
import PlanetFilm from "./PlanetFilms";
import styles from "../Styles/PlanetPage.module.css";

function PlanetPage() {
  const [planetInfo, setPlanetInfo] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [films, setFilms] = React.useState(null);

  const { id } = useParams();

  React.useEffect(() => {
    (async () => {
      const res = await getApiResource(PLANETS + `/${id}/`);
      console.log(res);
      if (res) {
        setPlanetInfo([
          { title: "Surface water", data: res.surface_water },
          { title: "Climate", data: res.climate },
          { title: "Diameter", data: res.diameter },
          { title: "Population", data: res.population },
          { title: "Terrain", data: res.terrain },
          { title: "Orbital period", data: res.orbital_period },
        ]);
        setName(res.name);
        setImage(getPlanetImage(id));
        res.films.length && setFilms(res.films);
      } else {
        console.error("error");
      }
    })();
  }, [id]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <LinkBack />
        <div className={styles.row}>
          <img className={styles.img} src={image} alt="planet" />
          {planetInfo && (
            <ul className={styles.list}>
              <h2 className={styles.name}>{name}</h2>
              {planetInfo.map(
                ({ title, data }) =>
                  data && (
                    <li className={styles.item} key={title}>
                      <span className={styles.title}>{title}:</span>
                      <span className={styles.data}>{data}</span>
                    </li>
                  )
              )}
            </ul>
          )}
        </div>
        <h3 className={styles.subName}>Films</h3>
        {films && <PlanetFilm films={films} />}
      </div>
    </div>
  );
}
export default PlanetPage;
