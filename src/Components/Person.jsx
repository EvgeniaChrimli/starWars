import React from "react";
import styles from "../Styles/Person.module.css";
import { Link } from "react-router-dom";
export default function Person({ people }) {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.list}>
          {people.map(({ name, id, image }) => (
            <li key={id} className={styles.item}>
              <Link to={`/${id}`}>
                <img src={image} alt="persons" className={styles.image} />
              </Link>
              <p className={styles.name}>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
