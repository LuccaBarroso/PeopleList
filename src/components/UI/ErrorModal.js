import React from "react";
import ReactDOM from "react-dom";

import styles from "./ErrorModal.module.scss";
import Card from "./Card";
import Button from "./Button";

const Backdrop = (props) => {
  return <div className={styles["backdrop"]} onClick={props.onConfirm}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={styles["errorModal"]}>
      <Card>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <Button onClick={props.onConfirm} type="button">
            Okay
          </Button>
        </footer>
      </Card>
    </div>
  );
};

const ErrorModal = (props) => {

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default ErrorModal;
