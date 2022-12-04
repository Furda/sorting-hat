import React from "react";

const Score = (props) => {
  return (
    <div>
      {props.house}: {props.score}
    </div>
  );
};

export default Score;
