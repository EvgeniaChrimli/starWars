import React from "react";
import { makeRequest } from "../utils/network";

function PlanetFilm({ films }) {
  const [filmsName, setFilmsName] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const res = await makeRequest(films);

      setFilmsName(res);
    })();
  }, []);
  return (
    <>
      <ul>
        {filmsName
          .sort((a, b) => a.episode_id - b.episode_id)
          .map(({ episode_id, title }) => (
            <li key={title}>
              <span>Episode: {episode_id}</span>
              <span>{title}</span>
            </li>
          ))}
      </ul>
    </>
  );
}
export default PlanetFilm;
