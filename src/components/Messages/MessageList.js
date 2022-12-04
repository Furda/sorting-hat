import React, { useEffect } from "react";
import Message from "./Message";
import styles from "./MessageList.module.css";

const MessageList = (props) => {
  // Greeting the user and asking for the user's name
  useEffect(() => {
    if (props.hasStarted) {
      return;
    }

    // Send greeting messages
    props.addMessage({
      message: "Welcome to the Sorting hat project!",
      from: "bot",
    });

    // Ask for the user name
    props.addMessage({ message: "What is your name?", from: "bot" });
  }, [props.hasStarted]);

  // show question with answers
  useEffect(() => {
    if (!props.hasStarted || props.hasFinished) {
      return;
    }

    if (props.hasAnswered) {
      console.log("questionIndex", props.questionIndex);
      console.log(props.hasFinished);
      // Display question
      const question = props.questions[props.questionIndex];
      let newMessage = { message: "Question: " + question.title, from: "bot" };
      props.addMessage(newMessage);

      // Display question's answer options
      let letterCode = 65; // (65 = A) not using state because it is too slow in updating the state
      question.answers.map((answer) => {
        newMessage = {
          message: String.fromCharCode(letterCode) + ". " + answer.title,
          from: "bot",
        };
        letterCode++;
        props.addMessage(newMessage);
        return newMessage;
      });

      props.updatedHasAnswered(false);
    }
  }, [props.hasAnswered, props.messages, props.questions, props.questionIndex]);

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
