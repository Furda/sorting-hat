import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.inputContainer}>
      <input className={styles.input} placeholder={props.placeholder}></input>
    </div>
  );
};

export default Input;
