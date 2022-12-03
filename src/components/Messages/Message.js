import React from "react";
import styles from "./Message.module.css";

const Message = (props) => {
  return (
    <p
      className={`${styles.message} ${
        props.from === "bot" ? styles.fromBot : styles.fromUser
      }`}
    >
      {props.children}
    </p>
  );
};

export default Message;
