import React from "react";
import Card from "../UI/Card";

const DisplayUsers = (props) => {
  return (
    <Card>
      {props.users}
    </Card>
  )
}
export default DisplayUsers;