import React from "react";
import Button from "react-bootstrap/Button";

const DeleteButton = props => {
  return (
    <Button
      disabled={props.disabled}
      onClick={() => props.deleteHandler(props.index)}
    >
      Delete
    </Button>
  );
};
export default DeleteButton;
