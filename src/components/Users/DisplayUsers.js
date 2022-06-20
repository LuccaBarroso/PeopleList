import React from "react";
import Card from "../UI/Card";

import styles from "./DisplayUsers.module.scss";

const DisplayUsers = (props) => {
  return (
    <Card>
      {props.users.map((user,index)=>{
        return <div className={styles["userItem"]} key={(index+" "+Math.random()).toString()}>{user}</div>
      })}
    </Card>
  )
}
export default DisplayUsers;