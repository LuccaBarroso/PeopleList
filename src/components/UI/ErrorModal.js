import React from "react";

import styles from "./ErrorModal.module.scss";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  const closeHandler = () => {
    props.onClose({});
  }

  return (
    <div>
      <div className={styles["backdrop"]} onClick={props.onConfirm}></div>
      <div className={styles["errorModal"]}>
        <Card>
          <header className={styles.header}>
            <h2>{props.title}</h2>
          </header>
          <div>
            <p>{props.message}</p>
          </div>
          <footer>
            <Button onClick={props.onConfirm} type="button">Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};
export default ErrorModal;
