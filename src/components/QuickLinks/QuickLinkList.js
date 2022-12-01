import React from "react";
import QuickLink from "./QuickLink";
import styles from "./QuickLinkList.module.css";

const QuickLinkList = (props) => {
  const answerOptions = ["A", "B", "C", "D"];
  return (
    <div className={styles.quickLinkList}>
      {answerOptions.map((answer) => (
        <QuickLink key={Math.random()}>{answer}</QuickLink>
      ))}
    </div>
  );
};

export default QuickLinkList;
