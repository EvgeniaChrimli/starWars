import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Link.module.css";
function LinkBack() {
  const navigate = useNavigate();
  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <>
      <a href="" onClick={handleGoBack} className={styles.link}>
        <span>Go back...</span>
      </a>
    </>
  );
}
export default LinkBack;
