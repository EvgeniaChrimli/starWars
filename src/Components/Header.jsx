import React from "react";
import { Link } from "react-router-dom";
import icon3 from "../images/icon3.png";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import {
  useTheme,
  THEME_DARK,
  THEME_LIGHT,
  THEME_NEITRAL,
} from "../context/ThemeProvider";
import styles from "../Styles/Header.module.css";

function Header() {
  const [icon, setIcon] = React.useState(icon1);
  const isTheme = useTheme();
  React.useEffect(() => {
    switch (isTheme.theme) {
      case THEME_DARK:
        setIcon(icon1);
        break;
      case THEME_LIGHT:
        setIcon(icon2);
        break;
      case THEME_NEITRAL:
        setIcon(icon3);
        break;

      default:
        break;
    }
  }, [isTheme]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/">
            <div className={styles.logo}>The SW Club.</div>
          </Link>
          <img className={styles.icon} src={icon} alt="" />
          <ul className={styles.list}>
            <Link to="people/?page=1">
              <li className={styles.item}>Peoples</li>
            </Link>
            <Link to="films">
              <li className={styles.item}>Films</li>
            </Link>
            <Link to="planets">
              <li className={styles.item}>Planets</li>
            </Link>
            <Link to="/login">
              <li className={styles.item}>LogIn</li>
            </Link>
            <Link to="/theme">
              <li className={styles.item}>Pick your theme</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
