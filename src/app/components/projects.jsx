import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import SharedComponent from "./shared.jsx";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Jumbotron from "react-bootstrap/Jumbotron";

const listStyle = {
  padding: "30px"
};
const titleStyle = {
  marginTop: "30px"
};
class ProjectsComponent extends React.Component {
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

        <Jumbotron style={titleStyle}>
          <h3>Past Projects</h3>
          <Card>
            <Card.Body>
              <Tabs defaultActiveKey="profile">
                <Tab eventKey="home" title="Client Indications">
                  <ul style={listStyle}>
                    <li>
                      Used Angular 8 to render the client page for increased
                      user experience.
                    </li>
                    <li>
                      Used Microsoft SQL server for increased testability and
                      increased data query speed.
                    </li>
                    <li>
                      Used Puppeteer testing utility to ensure the robust
                      functionality of the user interface.
                    </li>
                    <li>
                      Used .Net Core 2 and ServiceStack to reduce the complexity
                      of the backend microservices.
                    </li>
                    <li>
                      Used NUnit testing utility to ensure the integrity and
                      overall quality of the microservices.
                    </li>
                    <li>
                      Used RabbitMQ for increased daily valuation process for
                      hundreds of thousands of transactions bringing up to date
                      data for the clients.
                    </li>
                  </ul>
                </Tab>
                <Tab eventKey="profile" title="Drop Table">
                  <ul style={listStyle}>
                    <li>
                      Used React-Redux to render menu entree to reduce the
                      development complexity.
                    </li>
                    <li>
                      Used MongoDB for data storage for compatibility and
                      increased data query speed.
                    </li>
                    <li>
                      Used Jest/Enzyme testing utility to test my microservices
                      to ensure robust functionality.
                    </li>
                    <li>
                      Used HTTP-proxy to combine individual micro-services to
                      guarantee the integrity of the overall system for the
                      clients.
                    </li>
                    <li>
                      Deployed with Docker to Amazon Web Service EC2 to allow
                      the integration of microservices.
                    </li>
                  </ul>
                </Tab>
                <Tab eventKey="contact" title="Bed And Breakfast">
                  <ul style={listStyle}>
                    <li>
                      Used ExpressJS for its flexibility to serve review entrees
                      to the clients.
                    </li>
                    <li>
                      Benchmark PostgreSQL and Cassandra response time based on
                      requests per second.
                    </li>
                    <li>
                      Used Cassandra over PostgreSQL to quickly and consistently
                      record review comments.
                    </li>
                    <li>
                      Used Artillery load tester on the system to reassure the
                      system’s performance under stress.
                    </li>
                    <li>
                      Used NGINX to horizontally scale EC2 server instances for
                      better response time.
                    </li>
                    <li>
                      Used Redis for simple rapid data caching and data
                      retrieval.
                    </li>
                  </ul>
                </Tab>
              </Tabs>
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
  )(ProjectsComponent)
);
