import React from "react";
import styles from "./QuickLink.module.css";

const QuickLink = (props) => {
  return (
    <button className={styles.quickLink} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default QuickLink;
