import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import SharedComponent from "./shared.jsx";

const linkStyles = {
  paddingRight: "10px",
  textAlign: "center"
};
const linkHeader = {
  display: "block",
  textAlign: "center"
};
const icon = {
  height: "25px",
  width: "25px",
  paddingRight: "5px"
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
      <div className="container">
        <SharedComponent history={this.props.history}></SharedComponent>
        <div style={linkHeader}>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJyOR8FFH24YP9YYOUtw1jReYVBzyOH1V--aE6NQMlNGGRzjNl"
              style={icon}
            ></img>
            <a style={linkStyles} href="mailto:hanlinaunghack@gmail.com">
              hanlinaunghack@gmail.com
            </a>
          </div>
          <div>
            <img
              src="https://image.flaticon.com/icons/svg/124/124011.svg"
              style={icon}
            ></img>
            <a
              style={linkStyles}
              href="https://www.linkedin.com/in/han-linaung/"
            >
              My LinkedIn Profile
            </a>
          </div>
          <div>
            <img
              src="https://image.flaticon.com/icons/svg/25/25231.svg"
              style={icon}
            ></img>
            <a style={linkStyles} href="https://github.com/hanlinaunghack">
              My Github
            </a>
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
  )(ContactComponent)
);
