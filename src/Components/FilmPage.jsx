import React from "react";
import { API_FILMS } from "../Constants/api";
import { getApiResource } from "../utils/network";
import { getFilmImage } from "../services/getPeopleData";
import { useParams } from "react-router-dom";
import LinkBack from "../Components/linkBack/LinkBack";
import styles from "../Styles/FilmPage.module.css";

function FilmPage() {
  const [filmInfo, setFilmInfo] = React.useState(null);
  const [title, setTitle] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    (async () => {
      const res = await getApiResource(API_FILMS + `/${id}/`);

      if (res) {
        setFilmInfo([
          { title: "Director", data: res.director },
          { title: "Producer", data: res.producer },
          { title: "Release date", data: res.release_date },
          { title: "Opening crawl", data: res.opening_crawl },
        ]);
        setTitle(res.title);
        setImage(getFilmImage(id));
      } else {
      }
    })();
  }, [id]);
  return (
    <div className={styles.wrapper}>
      <LinkBack />
      <div className={styles.container}>
        {filmInfo && (
          <div className={styles.row}>
            {" "}
            <img className={styles.image} src={image} alt="" />
            <ul className={styles.list}>
              <h1 className={styles.title}>{title}</h1>
              {filmInfo.map(
                ({ title, data }) =>
                  data && (
                    <li className={styles.item} key={title}>
                      <span className={styles.subTitle}>{title}:</span>
                      <span className={styles.data}> {data}</span>
                    </li>
                  )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
export default FilmPage;
