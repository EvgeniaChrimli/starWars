import React from "react";
import { Link } from "react-router-dom";
import Login from "./LogIn";
import styles from "../../Styles/LoginPage.module.css";
function LoginPage() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.title}>Login</h1>
          <Login />

          <Link to="/auth">
            <p className={styles.linkToHome}>Go Home</p>
          </Link>
          <Link to="/register">
            <p className={styles.linkToReg}>Register</p>
          </Link>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
