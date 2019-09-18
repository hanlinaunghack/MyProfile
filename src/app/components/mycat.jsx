import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import SharedComponent from "./shared.jsx";
import Carousel from "react-bootstrap/Carousel";

const imgStyle = {
  marginLeft: "35%",
  width: "550px",
  height: "400px"
};
const imgStyle2 = {
  marginLeft: "35%",
  width: "400px",
  height: "550px"
};
class MyCatComponent extends React.Component {
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
        <div>
          <Carousel interval="2000">
            <Carousel.Item>
              <img style={imgStyle} src="https://i.imgur.com/RpOLAC1.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img style={imgStyle} src="https://i.imgur.com/Eud3Rvn.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img style={imgStyle} src="https://i.imgur.com/sai6nCD.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img style={imgStyle} src="https://i.imgur.com/FFodAyx.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img style={imgStyle2} src="https://i.imgur.com/vWdnvTk.jpg" />
            </Carousel.Item>
          </Carousel>
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
  )(MyCatComponent)
);
