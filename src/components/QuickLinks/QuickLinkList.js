import React, { useEffect, useState } from "react";
import QuickLink from "./QuickLink";
import styles from "./QuickLinkList.module.css";

const QuickLinkList = (props) => {
  const [answerOptions, setAnswerOptions] = useState([]);

  const addAnswerOption = (newAswerOption) => {
    setAnswerOptions((prevState) => [...prevState, newAswerOption]);
  };

  const calculateScore = (scores) => {
    // calculate scores
    props.updateScoreHandler(scores);
  };

  // Show answer options
  useEffect(() => {
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
    <div className={styles.quickLinkList}>
      {answerOptions.map((answer) => (
        <QuickLink
          key={Math.random()}
          onClick={() => {
            calculateScore(props.answers[answer.index].scores);
          }}
        >
          {answer.letter}
        </QuickLink>
      ))}
    </div>
  );
};

export default QuickLinkList;
