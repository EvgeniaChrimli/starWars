import Home from "../Pages/Home";
import FilmPage from "../Components/FilmPage";
import Films from "../Components/Films";
import Peoples from "../Components/Peoples";
import PersonPage from "../Components/PersonPage";
import Planets from "../Components/Planets";
import PlanetPage from "../Components/PlanetPage";
import AuthHome from "../Pages/AuthHome";
import RegisterPage from "../Components/auth/RegisterPage";
import LoginPage from "../Components/auth/LoginPage";
import ThemeChoose from "../Pages/ThemeChoose";

const routesConfig = [
  {
    path: "/people",
    component: Peoples,
  },
  {
    path: "/theme",
    component: ThemeChoose,
  },
  {
    path: "/auth",
    component: AuthHome,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/:id",
    component: PersonPage,
  },
  {
    path: "/films/:id/",
    component: FilmPage,
  },
  {
    path: "/planets/:id/",
    component: PlanetPage,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/planets",
    component: Planets,
  },
  {
    path: "/films",
    component: Films,
  },
];
export default routesConfig;
