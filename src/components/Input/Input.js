import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import styles from "./Input.module.css";

const Input = (props) => {
  const inputRef = useRef(null);

  const onSendHandler = () => {
    props.onSend(inputRef.current.value);

    // Clear input
    inputRef.current.value = null;
  };

  return (
    <div className={styles.inputContainer}>
      <input
        ref={inputRef}
        className={styles.input}
        placeholder={props.placeholder}
      ></input>
      <div className={styles.sendIconConteiner} onClick={onSendHandler}>
        <FontAwesomeIcon className={styles.sendIcon} icon={faPaperPlane} />
      </div>
    </div>
  );
};

export default Input;
