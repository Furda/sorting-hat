import React from "react";
import Score from "./Score";
import styles from "./ScoreList.module.css";

const ScoreList = ({ houses }) => {
  return (
    <div className={styles.scoreList}>
      {houses.map((house) => (
        <Score
          key={house.house + "_" + house.score}
          house={house.house}
          score={house.score}
        />
      ))}
    </div>
  );
};

export default ScoreList;
