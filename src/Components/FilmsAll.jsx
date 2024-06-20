import React from "react";
import LinkBack from "../Components/linkBack/LinkBack";
import { Link } from "react-router-dom";
import styles from "../Styles/FilmsAll.module.css";
function FilmsAll({ films }) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <LinkBack />
          <h2 className={styles.title_main}>Films</h2>
          <ul className={styles.list}>
            {films.map(({ title, director, image, id }) => (
              <li key={title} className={styles.item}>
                <Link to={`/films/${id}/`}>
                  {" "}
                  <img className={styles.image} src={image} alt="" />
                </Link>
                <p className={styles.title}>{title}</p>
                <p className={styles.director}>{director}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default FilmsAll;
