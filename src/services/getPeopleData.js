import {
  SWAPI_PARAM_PAGE,
  HTTP,
  HTTPS,
  SWAPI_ROOT,
  SWAPI_PEOPLE,
  GUIDE_IMG_EXTENSION,
  URL_IMG_PERSON,
  QUERY_PAGE,
  QUERY_FILMS,
  QUERY_PLANETS,
  GUIDE_ROOTFILM_IMG,
} from "../Constants/api";

const getId = (url, category) => {
  const protocol = checkProtocol(url);

  const id = url
    .replace(protocol + SWAPI_ROOT + category, "")
    .replace(/\//g, "");
  return id;
};

export const getPeoplePageId = (url) => {
  const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
  const id = url.slice(pos + SWAPI_PARAM_PAGE.length, url.length);
  return Number(id);
};

const checkProtocol = (url) => {
  if (url.lastIndexOf(HTTPS) !== -1) {
    return HTTPS;
  }
  return HTTP;
};

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE);
export const getFilmId = (url) => getId(url, QUERY_FILMS);
export const getPlanetlId = (url) => getId(url, QUERY_PLANETS);

export const getPeopleImage = (id) =>
  `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`;

export const getFilmImage = (id) =>
  `${GUIDE_ROOTFILM_IMG + QUERY_FILMS}/${id + GUIDE_IMG_EXTENSION}`;

export const getPlanetImage = (id) =>
  `${GUIDE_ROOTFILM_IMG + QUERY_PLANETS}/${id + GUIDE_IMG_EXTENSION}`;

//ф-ция, возвращающая номер текущей страницы
//обрезка всего до цифры, определяющей номер страницы
export const getCurrentCount = (url) => {
  const position = url.lastIndexOf(QUERY_PAGE); //ищем совпадение с константой
  const id = url.slice(position + QUERY_PAGE.length, url.length);
  return Number(id);
};

//https://starwars-visualguide.com/assets/img/films/4.jpg
