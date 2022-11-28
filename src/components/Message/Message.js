import React from "react";
import styles from "./Message.module.css";

const Message = (props) => {
  return <div className={styles.message}>{props.children}</div>;
};

export default Message;
