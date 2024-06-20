import React from "react";
import { API_PEOPLE } from "../Constants/api";
import { getApiResource } from "../utils/network";
import {
  getPeopleId,
  getPeopleImage,
  getCurrentCount,
} from "../services/getPeopleData";
import { useQueryParams } from "../hooks/useQueryParams";
import LinkBack from "./linkBack/LinkBack";
import PeopleNavigation from "./PeopleNavigation";
import Person from "./Person";
import styles from "../Styles/Peoples.module.css";

function Peoples() {
  const [people, setPeople] = React.useState([]);
  const [previosPage, setPreviosPage] = React.useState();
  const [nextPage, setNextPage] = React.useState();
  const [countPage, setCountPage] = React.useState(1);
  const query = useQueryParams();
  const queryPage = query.get("page");
  const getData = async (url) => {
    const res = await getApiResource(url);

    try {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const image = getPeopleImage(id);
        return {
          id,
          name,
          image,
        };
      });

      setPeople(peopleList);
      setNextPage(res.next);
      setPreviosPage(res.previous);
      setCountPage(getCurrentCount(url));
    } catch (error) {
      console.error("error");
    }
  };
  React.useEffect(() => {
    getData(API_PEOPLE + queryPage);
  }, [queryPage]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <LinkBack />
        <div className={styles.people_navigation}>
          <PeopleNavigation
            getData={getData}
            nextPage={nextPage}
            previosPage={previosPage}
            countPage={countPage}
          />
        </div>
        <Person people={people} />
      </div>
    </section>
  );
}
export default Peoples;
