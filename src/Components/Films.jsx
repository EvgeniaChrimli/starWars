import React from "react";
import { getApiResource } from "../utils/network";
import { getFilmId, getFilmImage } from "../services/getPeopleData";
import { API_FILMS } from "../Constants/api";
import FilmsAll from "./FilmsAll";
export default function Films() {
  const [films, setFilms] = React.useState([]);

  const getFilms = async (url) => {
    const res = await getApiResource(url);
    try {
      const filmList = res.results.map(({ title, url }) => {
        const id = getFilmId(url);
        const image = getFilmImage(id);

        return { title, id, image };
      });
      setFilms(filmList);
    } catch (error) {
      console.error(error);
    }
  };
  React.useEffect(() => {
    getFilms(API_FILMS);
  }, []);
  return (
    <>
      <FilmsAll films={films} />
    </>
  );
}
