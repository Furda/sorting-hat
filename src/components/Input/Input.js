import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import styles from "./Input.module.css";

const Input = (props) => {
  const inputRef = useRef(null);

  const onSendHandler = (e) => {
    e.preventDefault();
    if (inputRef.current.value === "") {
      // show error message
      alert("Please enter a valid name");
      return;
    }

    props.onSend(inputRef.current.value);

    // Clear input
    inputRef.current.value = null;
  };

  return (
    <form className={styles.inputContainer} onSubmit={onSendHandler}>
      <input
        ref={inputRef}
        className={styles.input}
        placeholder={props.placeholder}
        autoFocus
      ></input>
      <button type="submit" className={styles.sendIconConteiner}>
        <FontAwesomeIcon className={styles.sendIcon} icon={faPaperPlane} />
      </button>
    </form>
  );
};

export default Input;
