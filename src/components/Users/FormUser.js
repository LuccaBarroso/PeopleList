import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./FormUser.module.scss";

const FormUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const CreateNewUserHandler = (e) => {
    e.preventDefault();
    const enteredName = (nameInputRef.current.value);
    const enteredAge = (ageInputRef.current.value);
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+enteredAge < 0) {
      setError({ title: "Invalid input", message: "Please enter a valid age" });
      return;
    }
    props.onCreateNewUser(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles["form-user"]}>
        <form onSubmit={CreateNewUserHandler} className={styles["form-user"]}>
          <label>Name </label>
          <input
            type="text"
            placeholder="Your name"
            ref={nameInputRef}
          />
          <label for="lname">Age </label>
          <input
            type="text"
            placeholder="Your age"
            ref={ageInputRef}
          />
          <Button type="submit" children={"Submit"} />
        </form>
      </Card>
    </React.Fragment>
  );
};

export default FormUser;
