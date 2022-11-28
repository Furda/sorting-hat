import React from "react";
import styles from "./ProfilePicture.module.css";

const ProfilePicture = (props) => {
  const nameInitial = props.name.substring(0, 1);
  return <div className={styles.profilePicture}>{nameInitial}</div>;
};

export default ProfilePicture;
