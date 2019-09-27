import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import SharedComponent from "./shared.jsx";
import Carousel from "react-bootstrap/Carousel";

const imgStyle = {
  width: "550px",
  height: "400px"
};
const imgStyle2 = {
  width: "400px",
  height: "550px"
};
const titleStyle = {
  marginTop: "55px",
  display: "block",
  textAlign: "center"
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
      <div className="catbox">
        <SharedComponent history={this.props.history}></SharedComponent>
        <div style={titleStyle}>
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
            <Carousel.Item>
              <img style={imgStyle2} src="https://i.imgur.com/KMqJ2zJ.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img style={imgStyle2} src="https://i.imgur.com/qhPtOW9.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img style={imgStyle} src="https://i.imgur.com/ZFif6Wu.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img style={imgStyle2} src="https://i.imgur.com/6Jr5J0g.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img style={imgStyle2} src="https://i.imgur.com/j79yo8a.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img style={imgStyle2} src="https://i.imgur.com/fna5ODr.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img style={imgStyle2} src="https://i.imgur.com/t76wKbl.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img style={imgStyle2} src="https://i.imgur.com/Ap2jp1t.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img style={imgStyle} src="https://i.imgur.com/CIthppk.jpg" />
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
