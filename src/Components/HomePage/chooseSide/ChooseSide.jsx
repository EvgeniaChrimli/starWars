import React from "react";
import {
  useTheme,
  THEME_DARK,
  THEME_LIGHT,
  THEME_NEITRAL,
} from "../../../context/ThemeProvider";

function ChooseSide() {
  const isTheme = useTheme();
  return (
    <>
      {isTheme.theme}
      <button onClick={() => isTheme.change(THEME_LIGHT)}>Light</button>
      <button onClick={() => isTheme.change(THEME_DARK)}>Dark</button>
      <button onClick={() => isTheme.change(THEME_NEITRAL)}>Neitral</button>
    </>
  );
}
export default ChooseSide;
