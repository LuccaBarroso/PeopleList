import React, {useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./FormUser.module.scss";

const FormUser = (props) => {
  const [userName, setUserName] = useState("")
  const [userAge, setUserAge] = useState("")

  const CreateNewUserHandler = (e) => {
    e.preventDefault();
    console.log(`CreateNewUserHandler ${userName} ${userAge}`);
    props.onCreateNewUser(userName, userAge);
    setUserName("")
    setUserAge("")

  }
  const changeNameHandler = (e) => {
    setUserName(e.target.value)
  }
  const changeAgeHandler = (e) => {
    setUserAge(e.target.value)
  }

  return (
    <Card className={styles["form-user"]}>
      <form onSubmit={CreateNewUserHandler} className={styles["form-user"]}>
        <label>Name </label>
        <input type="text" onChange={changeNameHandler} value={userName ? userName : ""} placeholder="Your name" />
        <label for="lname">Age </label>
        <input type="text" onChange={changeAgeHandler} value={userAge ? userAge : ""} placeholder="Your age" />
        <Button type="submit" children={"Submit"}/>
      </form>
    </Card>
  );
};

export default FormUser;
