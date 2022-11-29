import React from "react";
import styles from "./Message.module.css";

const Message = (props) => {
  return (
    <>
      <p className={`${styles.message} ${styles.fromBot}`}>{props.children}</p>
      <p className={`${styles.message} ${styles.fromUser}`}>{props.children}</p>
    </>
  );
};

export default Message;
