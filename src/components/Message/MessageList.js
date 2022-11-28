import React from "react";
import Message from "./Message";
import styles from "./MessageList.module.css";

const MessageList = (props) => {
  const messages = ["Hello World", "Let's start the party", "question"];
  return (
    <div className={styles.MessageList}>
      {messages.map((message) => (
        <Message>{message}</Message>
      ))}
    </div>
  );
};

export default MessageList;
