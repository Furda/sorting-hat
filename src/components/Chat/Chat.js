import React from "react";
import styles from "./Chat.module.css";

const Chat = (props) => {
  return <div className={styles.chat}>{props.children}</div>;
};

export default Chat;
