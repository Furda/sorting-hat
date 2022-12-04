import React from "react";
import Score from "./Score";
import styles from "./ScoreList.module.css";

const ScoreList = ({ scores }) => {
  return (
    <div className={styles.scoreList}>
      <Score house="Gryffindor" score={scores.g} />
      <Score house="Hufflepuff" score={scores.h} />
      <Score house="Ravenclaw" score={scores.r} />
      <Score house="Slytherin" score={scores.s} />
    </div>
  );
};

export default ScoreList;
