import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { downloadPdf } from "../api/downloadPdf.js";
const title = {
  textAlign: "center"
};
const SharedComponent = props => {
  return (
    <div style={title}>
      <h3>Han Lin Aung Profile</h3>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => props.history.push("/home")}>
              Home
            </Nav.Link>
            <Nav.Link onClick={() => props.history.push("/education")}>
              Educations
            </Nav.Link>
            <Nav.Link onClick={() => props.history.push("/contact")}>
              Contact
            </Nav.Link>
            <Nav.Link onClick={() => props.history.push("/projects")}>
              Past Projects
            </Nav.Link>
            <Nav.Link onClick={() => props.history.push("/zylo")}>
              My Cat
            </Nav.Link>
            <Nav.Link onClick={() => downloadPdf()}>Download Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default SharedComponent;
