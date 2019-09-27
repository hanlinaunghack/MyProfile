import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CommentComponent = props => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.user.name}</Card.Title>
        <Card.Text>{props.user.comment}</Card.Text>
        <Button
          disabled={props.disabled}
          onClick={() => props.deleteHandler(props.user.index)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};
export default CommentComponent;
