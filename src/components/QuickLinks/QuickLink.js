import React, { useState, useEffect } from "react";
import styles from "./QuickLink.module.css";

const QuickLink = (props) => {
  const [delayed, setDelayed] = useState(true);

  // Delayed showing the message to create the illusion of messaging
  useEffect(() => {
    const timeout = setTimeout(
      () => setDelayed(false),
      props.delayTimeInSeconds * 1000
    );
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    delayed || (
      <button className={styles.quickLink} onClick={props.onClick}>
        {props.children}
      </button>
    )
  );
};

export default QuickLink;
