import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import SharedComponent from "./shared.jsx";
import Table from "react-bootstrap/Table";

const tableStyle = {
  border: "1px solid black",
  padding: "5px"
};
class EducationComponent extends React.Component {
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
          <h3>Educations and Trainings</h3>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th colspan="4">Name</th>
                <th colspan="3">Field of Study</th>
                <th>Degree</th>
                <th>From</th>
                <th>To</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="4">University of California Santa Barbara</td>
                <td colspan="3">Biology</td>
                <td>BS</td>
                <td>2005</td>
                <td>2010</td>
              </tr>
              <tr>
                <td colspan="4">Hack Reactor</td>
                <td colspan="3">Coding</td>
                <td></td>
                <td>2018</td>
                <td>2019</td>
              </tr>
            </tbody>
          </Table>
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
  )(EducationComponent)
);
