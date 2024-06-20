import React from "react";
import styles from "../../Styles/Form.module.css";

function Form({ title, handleClick }) {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <form action="" className={styles.form}>
          <div className={styles.inputBox}>
            <input
              required
              placeholder="enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
            <input
              required
              placeholder="enter your password"
              type="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className={styles.input}
            />
          </div>
        </form>
        <button
          className={styles.button}
          onClick={() => handleClick(email, pass)}
        >
          {title}
        </button>
      </div>
    </div>
  );
}
export default Form;
