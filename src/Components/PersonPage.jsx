import React from "react";
import { Suspense } from "react";
import { useParams } from "react-router-dom";
import { getApiResource } from "../utils/network";
import { API_PERSON } from "../Constants/api";
import { getPeopleImage } from "../services/getPeopleData";
import LinkBack from "../Components/linkBack/LinkBack";
import UiLoading from "./UI/UIButton/UILoading/UiLoading";
import styles from "../Styles/PersonPage.module.css";

const PeopleFilms = React.lazy(() => import("./PeopleFilms"));
export default function PersonPage() {
  const { id } = useParams();
  const [personInfo, setInfo] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [image, setImage] = React.useState(null);
  const [films, setFilms] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const res = await getApiResource(API_PERSON + `/${id}/`);

      if (res) {
        setInfo([
          { title: "Birth", data: res.birth_year },
          { title: "Mass", data: res.mass },
          { title: "Height", data: res.height },
          { title: "Eye color", data: res.eye_color },
          { title: "Skin", data: res.skin_color },
        ]);
        setName(res.name);
        setImage(getPeopleImage(id));
        res.films.length && setFilms(res.films);
      } else {
        console.error("error");
      }
    })();
  }, [id]);

  return (
    <>
      <div className={styles.wrapper}>
        <LinkBack />

        <div className={styles.container}>
          <h1 className={styles.title}>{name}</h1>
          <div className={styles.items}>
            <img className={styles.image} src={image} alt="people" />

            {personInfo && (
              <ul className={styles.list}>
                {personInfo.map(
                  ({ title, data }) =>
                    data && (
                      <li className={styles.item} key={title}>
                        <span className={styles.info_title}>{title}:</span>
                        <span className={styles.info_data}>{data}</span>
                      </li>
                    )
                )}
              </ul>
            )}
            {films && (
              <Suspense fallback={<UiLoading />}>
                <PeopleFilms films={films} />
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
