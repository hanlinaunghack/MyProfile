import React from "react";
import Card from "react-bootstrap/Card";
const cardStyle = {
  padding: "15px"
};
const dateStyle = {
  float: "right",
  fontSize: "15px",
  color: "#979A9A",
  fontStyle: "italic",
  fontWeight: "550",
  fontFamily: ["serif"]
};
const ExperienceComponent = props => {
  return (
    <div>
      <h3>Work experience</h3>
      <Card>
        <Card.Body style={cardStyle}>
          <Card.Title>
            Client Indications: Full-stack WebApp for Clients and Hedgers
            <span style={dateStyle}>2019-</span>
          </Card.Title>
          <ul>
            <li>
              Used Angular 8 to render the client page for increased user
              experience.
            </li>
            <li>
              Used Microsoft SQL server for increased testability and increased
              data query speed.
            </li>
            <li>
              Used Puppeteer testing utility to ensure the robust functionality
              of the user interface.
            </li>
            <li>
              Used .Net Core 2 and ServiceStack to reduce the complexity of the
              backend microservices.
            </li>
            <li>
              Used NUnit testing utility to unsure the integrity and overall
              quality of the microservices.
            </li>
            <li>
              Used RabbitMQ for increased daily valuation process for hundreds
              of thousands of transactions bringing up to date data for the
              clients.
            </li>
          </ul>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body style={cardStyle}>
          <Card.Title>
            Good Faith Clinic: Clinical Support - Los Angeles, California
            <span style={dateStyle}>2013-2016</span>
          </Card.Title>
          <ul>
            <li>
              Implemented a process to help senior patients experience better
              care.
            </li>
            <li>
              Provided strategic support for the patients and their families
              resulting in more efficient visits.
            </li>
            <li>
              Conducted patient interviews and wrote reports for the physician
              to reduce the visitation time and optimize one on one times spent
              with patients.
            </li>
          </ul>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body style={cardStyle}>
          <Card.Title>
            De La Guerra, Kitchen Assistant – Santa Barbara, California
            <span style={dateStyle}>2009-2010</span>
          </Card.Title>
          <ul>
            <li>
              Managed restaurant workflow, and resolve emergencies to maintain
              high customer satisfaction.
            </li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};
export default ExperienceComponent;
