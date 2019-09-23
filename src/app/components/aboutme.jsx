import React from "react";
import Card from "react-bootstrap/Card";

const AboutMe = () => {
  return (
    <Card
      style={{
        width: "90%",
        margin: "auto",
        padding: "20px",
        marginBottom: "10px",
        marginTop: "10px"
      }}
    >
      <Card.Img
        style={{ width: "200px", height: "200px", margin: "auto" }}
        variant="top"
        src="https://media.licdn.com/dms/image/C4E03AQHAVT4Z_S5ixg/profile-displayphoto-shrink_200_200/0?e=1574294400&v=beta&t=1YnvTddNtvmLcmfgQmmHa7FQy44AHdxqgzrxFJOUvVA"
      />
      <Card.Body>
        <Card.Title>About Me</Card.Title>
        <Card.Text>
          Highly skilled with front end technologies like Reactjs and Reduxjs,
          backend technologies like Nodejs and Expressjs and database management
          systems like MySQL, PostgreSQL, MongoDB and Cassandra. Has background
          knowledge and education of Biological and Medical Science.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default AboutMe;
