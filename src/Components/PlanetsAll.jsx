import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/PlanetAll.module.css";

function PlanetsAll({ planets }) {
  return (
    <>
      <ul className={styles.list}>
        {planets.map(({ img, id, name }) => (
          <li className={styles.item} key={id}>
            <img className={styles.img} src={img} alt="" />
            <Link to={`/planets/${id}`}>
              <p className={styles.name}>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default PlanetsAll;
