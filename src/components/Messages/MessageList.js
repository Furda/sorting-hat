import React, { useState } from "react";
import Message from "./Message";
import styles from "./MessageList.module.css";

const MessageList = (props) => {
  const [answerLetter] = useState(["A", "B", "C", "D", "E", "F", "G", "H"]);
  let answerLetterIndex;

  //try using functions and save the result in a variable to show the answers and even questions
  return (
    <>
      {props.hasAnswered && (
        <div className={styles.MessageList}>
          {props.questions.map((question) => {
            return <Message key={Math.random()}>{question.title}</Message>;
          })}

          {/* {props.questions.map((question) => {
            console.log(question);
            question.answers.map((answer) => {
              return <Message key={Math.random()}>{answer.title}</Message>;
            })} */}
        </div>
      )}
    </>
  );
};

export default MessageList;
