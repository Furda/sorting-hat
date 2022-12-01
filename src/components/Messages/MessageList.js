import React, { useState, useEffect } from "react";
import Message from "./Message";
import styles from "./MessageList.module.css";

const MessageList = (props) => {
  const [messages, setMessages] = useState([]);

  // const [answerLetter] = useState(["A", "B", "C", "D", "E", "F", "G", "H"]);
  // let answerLetterIndex;

  // try using functions and save the result in a variable to show the answers and even questions

  // 1. greeting (explain the game)
  // 2. get answer by quick link
  // 3. ask first question

  const addMessage = (newMessage) => {
    setMessages((prevState) => [...prevState, newMessage]);
  };

  useEffect(() => {
    if (props.hasAnswered) {
      const question = props.questions[props.questionIndex];
      console.log(question.title);
      addMessage(question.title);
      question.answers.map((answer) => {
        console.log(answer.title);
        addMessage(answer.title);
        return answer.title;
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
