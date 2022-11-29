import React from "react";
import styles from "./QuickLink.module.css";

const QuickLink = (props) => {
  return <p className={styles.quickLink}>{props.children}</p>;
};

export default QuickLink;
