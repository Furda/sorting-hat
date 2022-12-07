import React from "react";
import styles from "./ScoreList.module.css";

const Score = (props) => {
  return (
    <div>
      {props.house}: <span className={styles.score}>{props.score}</span>
    </div>
  );
};

export default Score;
