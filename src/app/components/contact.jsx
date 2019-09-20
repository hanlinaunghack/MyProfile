import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import SharedComponent from "./shared.jsx";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";

const linkStyles = {
  paddingRight: "10px",
  textAlign: "center"
};
const linkHeader = {
  display: "block",
  textAlign: "center",
  paddingTop: "10px"
};
const icon = {
  height: "25px",
  width: "25px",
  paddingRight: "5px"
};
const icon2 = {
  height: "25px",
  width: "27px",
  paddingRight: "5px"
};
const jumboStyle = {
  marginTop: "30px"
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
      <div className="container box">
        <SharedComponent history={this.props.history}></SharedComponent>
        <Jumbotron style={jumboStyle}>
          <Card>
            <Card.Title style={linkHeader}>Contacts</Card.Title>
            <Card.Body>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJyOR8FFH24YP9YYOUtw1jReYVBzyOH1V--aE6NQMlNGGRzjNl"
                  style={icon2}
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
              <div>
                <img
                  src="https://img.icons8.com/bubbles/2x/address.png"
                  style={icon2}
                ></img>
                <span>
                  <a
                    href="https://en.wikipedia.org/wiki/Los_Angeles"
                    target="_blank"
                  >
                    Los Angeles
                  </a>
                  {", "}
                  <a
                    href="https://en.wikipedia.org/wiki/California"
                    target="_blank"
                  >
                    California
                  </a>
                  {", "}
                  <a
                    href="https://en.wikipedia.org/wiki/United_States"
                    target="_blank"
                  >
                    United States
                  </a>
                </span>
              </div>
            </Card.Body>
          </Card>
        </Jumbotron>
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
