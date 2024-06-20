export const HTTPS = "https://";
export const HTTP = "http://";
export const SWAPI_ROOT = "swapi.dev/api/";
export const SWAPI_PEOPLE = "people";
export const QUERY_PAGE = "/?page=";
export const QUERY_FILMS = "films";
export const QUERY_PLANETS = "planets";

export const API_PEOPLE = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE + QUERY_PAGE;
export const API_PERSON = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE;
export const API_FILMS = HTTPS + SWAPI_ROOT + QUERY_FILMS;
export const API_PLANETS = HTTPS + SWAPI_ROOT + QUERY_PLANETS + QUERY_PAGE;
export const PLANETS = HTTPS + SWAPI_ROOT + QUERY_PLANETS;

export const SWAPI_PARAM_PAGE = "/?page=";

export const GUIDE_ROOT_IMG = "https://starwars-visualguide.com/assets/img/";
export const GUIDE_ROOTFILM_IMG =
  "https://starwars-visualguide.com/assets/img/";
export const GUIDE_PEOPLE = "characters";
export const GUIDE_IMG_EXTENSION = ".jpg";

export const URL_IMG_PERSON = GUIDE_ROOT_IMG + GUIDE_PEOPLE;
