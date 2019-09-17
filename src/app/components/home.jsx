import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import SharedComponent from "./shared.jsx";
import AboutMe from "./aboutme.jsx";

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disableButtons: false
    };
  }
  render() {
    return (
      <div>
        <SharedComponent history={this.props.history}></SharedComponent>
        <div className="container">
          <div>Welcome to my page!</div>
          <AboutMe></AboutMe>
          <div>
            This page is deployed on AWS EC2 instance using docker. The site is
            still under construction. More contents to be added in the future.
          </div>
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
  )(HomeComponent)
);
