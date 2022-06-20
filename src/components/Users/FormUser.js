import React, {useState} from "react";
import Card from "../UI/Card";
import styles from "./FormUser.module.scss";

const FormUser = (props) => {
  const [userName, setUserName] = useState("")
  const [userAge, setUserAge] = useState("")

  const CreateNewUserHandler = (e) => {
    e.preventDefault();
    console.log(`CreateNewUserHandler ${userName} ${userAge}`);
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
      <label for="fname">Name </label>
      <input type="text" onChange={changeNameHandler} id="fname" name="fname" placeholder="Your name" />
      <label for="lname">Age </label>
      <input type="text" onChange={changeAgeHandler} id="lname" name="lname" placeholder="Your age" />
      <input type="submit" value="Submit" />
    </form>
    </Card>
  );
};

export default FormUser;
