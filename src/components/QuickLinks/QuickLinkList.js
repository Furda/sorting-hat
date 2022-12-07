import React, { useLayoutEffect, useState } from "react";
import QuickLink from "./QuickLink";
import styles from "./QuickLinkList.module.css";

const QuickLinkList = (props) => {
  const [answerOptions, setAnswerOptions] = useState([]);
  const [delayed, setDelayed] = useState(true);

  const addAnswerOption = (newAswerOption) => {
    setAnswerOptions((prevState) => [...prevState, newAswerOption]);
  };

  const sendResponseMessage = (answer, index) => {
    props.addMessage({
      id: Math.random(),
      message: answerOptions[index].letter + ". " + answer.title,
      from: "user",
    });
  };

  const quickLinkOnclickHandler = (answer, index) => {
    if (props.questionIndex + 1 >= props.questionsLength) {
      props.updateHasFinished(true);
    }
    sendResponseMessage(answer, index);
    props.updateScoreHandler(answer.scores);
    props.updatedHasAnswered(true);
    props.updateQuestionIndex();
  };

  // Delayed showing the message to create the illusion of messaging
  useLayoutEffect(() => {
    const timeout = setTimeout(
      () => setDelayed(false),
      props.delayTimeInSeconds * 1000
    );
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Show answer options
  useLayoutEffect(() => {
    let letterCode = 65; // (65 = A) not using state because it is too slow in updating the state
    props.answers.forEach((answer, index) => {
      addAnswerOption({
        letter: String.fromCharCode(letterCode),
        index: index,
      });
      letterCode++;
    });
  }, [props.answers]);

  return (
    delayed || (
      <div className={styles.quickLinkList}>
        {answerOptions.map((answer, index) => (
          <QuickLink
            key={index}
            onClick={() => {
              quickLinkOnclickHandler(props.answers[answer.index], index);
            }}
          >
            {answer.letter}
          </QuickLink>
        ))}
      </div>
    )
  );
};

export default QuickLinkList;
