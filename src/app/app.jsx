import React from "react";
import { save_file, load_file } from "./api/savefile";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disableButtons: false
    };
    this.saveHandler = this.saveHandler.bind(this);
    this.loadHandler = this.loadHandler.bind(this);
  }
  async saveHandler(event) {
    var data = {
      studentName: "sarah"
    };
    this.setState({
      ...this.state,
      disableButtons: true
    });
    await save_file(data, "/api/savefile");
    await this.setState({
      ...this.state,
      disableButtons: false
    });
  }
  async loadHandler(event) {
    await this.setState({
      ...this.state,
      disableButtons: true
    });
    var result = await load_file("/api/savefile");
    await this.setState({
      ...this.state,
      disableButtons: false
    });
  }
  render() {
    return (
      <div>
        <h3>Han Lin Aung Profile</h3>
        <nav>
          <button>Home</button>
        </nav>
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
  )(AppComponent)
);
