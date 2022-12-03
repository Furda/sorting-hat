import React, { useState, useEffect } from "react";
import Message from "./Message";
import styles from "./MessageList.module.css";

const MessageList = (props) => {
  // const [prefix] = useState(["A", "B", "C", "D", "E", "F", "G", "H"]);
  // let answerLetterIndex;

  // show question with answers
  useEffect(() => {
    if (props.hasAnswered) {
      // Display question
      const question = props.questions[props.questionIndex];
      let newMessage = { message: "Question: " + question.title, from: "bot" };
      props.addMessage(newMessage);

      // Display question's answer options
      question.answers.map((answer) => {
        newMessage = { message: answer.title, from: "bot" };
        props.addMessage(newMessage);
        return newMessage;
      });

      props.updatedHasAnswered(false);
    }
  }, [props]);

  return (
    <div className={styles.messageList}>
      {props.messages.map((message) => (
        <Message key={Math.random()} from={message.from}>
          {message.message}
        </Message>
      ))}
    </div>
  );
};

export default MessageList;
