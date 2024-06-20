import React from "react";
import { makeRequest } from "../utils/network";
import styles from "../Styles/PeopleFilms.module.css";
import { motion } from "framer-motion";
function PeopleFilms({ films }) {
  const [filmsName, setFilmsName] = React.useState([]);

  const pVariants = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  React.useEffect(() => {
    (async () => {
      const res = await makeRequest(films);

      setFilmsName(res);
    })();
  }, []);

  return (
    <>
      <ul className={styles.list}>
        {filmsName
          .sort((a, b) => a.episode_id - b.episode_id)
          .map(({ title, episode_id }) => (
            <motion.li
              key={title}
              className={styles.item}
              initial={"hidden"}
              animate={"visible"}
              transition={{
                duration: 1,
                delay: 1,
              }}
              variants={pVariants}
            >
              <span className={styles.episode}>Episode {episode_id}</span>
              <span className={styles.title}>{title}</span>
            </motion.li>
          ))}
      </ul>
    </>
  );
}

export default PeopleFilms;
