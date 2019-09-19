import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import SharedComponent from "./shared.jsx";
import Table from "react-bootstrap/Table";
import Jumbotron from "react-bootstrap/Jumbotron";
import ExperienceComponent from "./experience.jsx";
import Card from "react-bootstrap/Card";

const titleStyle = {
  marginTop: "30px"
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
      <div className="container">
        <SharedComponent history={this.props.history}></SharedComponent>
        <div>
          <Jumbotron style={titleStyle}>
            <ExperienceComponent></ExperienceComponent>
          </Jumbotron>
          <Jumbotron>
            <h3>Educations and Trainings</h3>
            <Card>
              <Card.Body>
                <Card.Text>
                  <Table striped bordered hover>
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
                        <td colspan="4">
                          University of California Santa Barbara
                        </td>
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
                </Card.Text>
              </Card.Body>
            </Card>
          </Jumbotron>
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
