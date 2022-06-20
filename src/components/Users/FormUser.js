import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./FormUser.module.scss";

const FormUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const CreateNewUserHandler = (e) => {
    e.preventDefault();
    console.log(`CreateNewUserHandler ${userName} ${userAge}`);
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({title: "Invalid input", message: "Please enter a valid name and age"});
      return;
    }
    if(+userAge < 0) {
      setError({title: "Invalid input", message: "Please enter a valid age"});
      return;
    }
    props.onCreateNewUser(userName, userAge);
    setUserName("");
    setUserAge("");
  };
  const changeNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const changeAgeHandler = (e) => {
    setUserAge(e.target.value);
  };
  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={styles["form-user"]}>
        <form onSubmit={CreateNewUserHandler} className={styles["form-user"]}>
          <label>Name </label>
          <input
            type="text"
            onChange={changeNameHandler}
            value={userName ? userName : ""}
            placeholder="Your name"
          />
          <label for="lname">Age </label>
          <input
            type="text"
            onChange={changeAgeHandler}
            value={userAge ? userAge : ""}
            placeholder="Your age"
          />
          <Button type="submit" children={"Submit"} />
        </form>
      </Card>
    </div>
  );
};

export default FormUser;
