import React from "react";
import styles from "./UiButton.module.css";
function UiButton({ text, onClick, disabled }) {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}
export default UiButton;
