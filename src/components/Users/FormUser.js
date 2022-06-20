import React from "react";
import styles from "./FormUser.module.scss";

const FormUser = (props) => {
  return (
    <form className={styles["form-user"]}>
      <label for="fname">Name </label>
      <input type="text" id="fname" name="fname" placeholder="Your name" />
      <label for="lname">Age </label>
      <input type="text" id="lname" name="lname" placeholder="Your age" />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default FormUser;
