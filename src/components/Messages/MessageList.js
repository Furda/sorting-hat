import React, { useState, useEffect } from "react";
import Message from "./Message";
import styles from "./MessageList.module.css";

const MessageList = (props) => {
  const [messages, setMessages] = useState([]);

  // const [prefix] = useState(["A", "B", "C", "D", "E", "F", "G", "H"]);
  // let answerLetterIndex;

  const addMessage = (newMessage) => {
    setMessages((prevState) => [...prevState, newMessage]);
  };

  useEffect(() => {
    if (props.hasAnswered) {
      const question = props.questions[props.questionIndex];
      addMessage("Question: " + question.title);
      question.answers.map((answer) => {
        addMessage(answer.title);
        return answer;
      });

      props.updatedHasAnswered(false);
    }
  }, [messages, props]);

  return (
    <div className={styles.messageList}>
      {messages.map((message) => (
        <Message key={Math.random()}>{message}</Message>
      ))}
    </div>
  );
};

export default MessageList;
