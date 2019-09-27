import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import SharedComponent from "./shared.jsx";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import DeleteButton from "./delete-button.jsx";
import { getComments, postComment, deleteComment } from "../api/comments.js";
const textAreaStyle = {
  resize: "none"
};
class CommentsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      errorMessages: [],
      comments: [],
      name: "",
      comment: ""
    };
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.commentChangeHandler = this.commentChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }
  async componentDidMount() {
    var comments = await getComments();
    this.setState({ ...this.state, comments, disabled: false });
  }
  nameChangeHandler(e) {
    this.setState({
      ...this.state,
      name: e.target.value
    });
  }
  commentChangeHandler(e) {
    this.setState({
      ...this.state,
      comment: e.target.value
    });
  }
  async submitHandler(e) {
    this.setState({ ...this.state, disabled: true });
    e.preventDefault();
    let result = { ...this.state };
    let error = [];
    if (!result.name) error.push("You must fill out your name!");
    if (!result.comment) error.push("You have not commented yet!");
    if (error.length) {
      this.setState({ ...this.state, errorMessages: error, disabled: false });
      return;
    } else {
      let com = { index: 1, name: "Han", comment: "Hi, My name is Han!" };
      await postComment(com.index, com.name, com.comment);
      let comments = await getComments();
      document.getElementById("formName").value = "";
      document.getElementById("formComment").value = "";
      this.setState({
        ...this.state,
        errorMessages: [],
        comments,
        disabled: false
      });
    }
  }
  async deleteHandler(e) {
    await deleteComment(e);
    let comments = await getComments();
    this.setState({ ...this.state, comments });
  }
  render() {
    return (
      <div className="container box">
        <SharedComponent history={this.props.history}></SharedComponent>
        <h3>Please leave your comments below!</h3>
        {this.state.errorMessages.map((e, i) => (
          <Alert key={i} variant="danger">
            {e}
          </Alert>
        ))}
        {this.state.comments.map((e, i) => (
          <DeleteButton
            deleteHandler={this.deleteHandler}
            index={e.index}
            key={i}
            disabled={this.state.disabled}
          ></DeleteButton>
        ))}
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              name="username"
              maxLength="10"
              placeholder="Name"
              id="formName"
              onChange={e => this.nameChangeHandler(e)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              maxLength="60"
              rows="3"
              style={textAreaStyle}
              onChange={e => this.commentChangeHandler(e)}
              id="formComment"
            ></Form.Control>
          </Form.Group>
          <Form.Control
            disabled={this.state.disabled}
            type="submit"
            value="Submit"
            onClick={this.submitHandler}
          ></Form.Control>
        </Form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {};
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CommentsComponent)
);
