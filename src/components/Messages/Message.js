import React, { useState, useLayoutEffect } from "react";
import styles from "./Message.module.css";

const Message = ({ from, prefix, children, delayTimeInSeconds }) => {
  const [delayed, setDelayed] = useState(true);

  useLayoutEffect(() => {
    if (from === "user") {
      setDelayed(false);
      return;
    }
    const timeout = setTimeout(
      () => setDelayed(false),
      delayTimeInSeconds * 1000
    );
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    delayed || (
      <p
        className={`${styles.message} ${
          from === "bot" ? styles.fromBot : styles.fromUser
        }`}
      >
        {prefix && <b>{prefix}&nbsp;</b>}
        {children}
      </p>
    )
  );
};

export default Message;
