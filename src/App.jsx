import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import routesConfig from "./routes/routesConfig";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {routesConfig.map((route, index) => (
            <Route key={index} path={route.path} Component={route.component} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
