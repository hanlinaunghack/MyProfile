import React from "react";
import Card from "react-bootstrap/Card";

const SkillComponent = () => {
  return (
    <Card
      style={{
        width: "60rem",
        margin: "auto",
        padding: "20px"
      }}
    >
      <Card.Body>
        <Card.Title>Skills</Card.Title>
        <Card.Text>
          <p>Languages: Javascript, C#, HTML, CSS</p>
          <p>
            Front-End: ReactJS, ReduxJS, Webpack, Babel, ES6, Angular, NGRX,
            VueJS, VueX, JSX, JQuery, AJAX
          </p>
          <p>
            Back-End(MVC): NodeJS, ExpressJS, .NET Core, ASP.NET, ServiceStack,
            REST API
          </p>
          <p>
            Database Management System(DBMS): MongoDB, MySQL, PostGreSQL,
            Cassandra, Redis
          </p>
          <p>
            Testing Framework: Jest, Enzyme, Puppeteer, Mocha, Chai, Jasmine,
            NUnitTest
          </p>
          <p>Deployment: Docker, AWS, EC2, NGINX, Jenkins 2, Git, GitLab CI</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default SkillComponent;
