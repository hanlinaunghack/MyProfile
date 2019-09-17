import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import SharedComponent from "./shared.jsx";

const linkStyles = {
  paddingRight: "10px",
  textAlign: "center"
};
const linkHeader = {
  display: "flex",
  textAlign: "center"
};
class ContactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disableButtons: false
    };
  }
  render() {
    return (
      <div>
        <SharedComponent props={this.props}></SharedComponent>
        <div style={linkHeader}>
          <a style={linkStyles} href="https://www.linkedin.com/in/han-linaung/">
            LinkedIn
          </a>
          <a style={linkStyles} href="https://github.com/hanlinaunghack">
            Github
          </a>
        </div>
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
  )(ContactComponent)
);
