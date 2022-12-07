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
      id: Math.random(),
      message: "Welcome to the Sorting hat project!",
      from: "bot",
    });

    // Send game explanation message
    props.addMessage({
      id: Math.random(),
      message:
        "I am going to ask you a few questions, and you should answer to whatever you think it is the best answer. Once all questions has been answer I will be selecting the most appropriate house for you",
      from: "bot",
    });

    // Ask for the user name
    props.addMessage({
      id: Math.random(),
      message: "What is your name?",
      from: "bot",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.hasStarted]);

  // show question with answers
  useEffect(() => {
    if (!props.hasStarted || props.hasFinished) {
      return;
    }

    if (props.hasAnswered) {
      // Display question
      const question = props.questions[props.questionIndex];
      let newMessage = {
        id: Math.random(),
        prefix: "Question:",
        message: question.title,
        from: "bot",
      };
      props.addMessage(newMessage);

      // Display question's answer options
      let letterCode = 65; // (65 = A) not using state because it is too slow in updating the state
      question.answers.map((answer) => {
        newMessage = {
          id: Math.random(),
          prefix: String.fromCharCode(letterCode) + ".",
          message: answer.title,
          from: "bot",
        };
        letterCode++;
        props.addMessage(newMessage);
        return newMessage;
      });

      props.updatedHasAnswered(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.hasAnswered, props.messages, props.questions, props.questionIndex]);

  return (
    <div className={styles.messageList}>
      {props.messages.map((message) => {
        console.log("message", message);
        return (
          <Message
            key={message.id}
            from={message.from}
            prefix={message.prefix || ""}
            delayTimeInSeconds={props.delayTimeInSeconds}
          >
            {message.message}
          </Message>
        );
      })}
    </div>
  );
};

export default MessageList;
