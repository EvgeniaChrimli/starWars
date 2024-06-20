import React from "react";
import loader from "./loader.svg";
import styles from "./UiLoading.module.css";

function UiLoading() {
  return <img className={styles.loader} src={loader} alt="loading..." />;
}
export default UiLoading;
