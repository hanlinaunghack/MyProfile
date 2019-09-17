import React from "react";
import { downloadPdf } from "../api/downloadPdf.js";
const title = {
  textAlign: "center"
};
const SharedComponent = props => {
  return (
    <div style={title}>
      <h3>Han Lin Aung Profile</h3>
      <nav>
        <button onClick={() => props.history.push("home")}>Home</button>
        <button onClick={() => props.history.push("contact")}>Contact</button>
        <button onClick={() => downloadPdf()}>Resume</button>
      </nav>
    </div>
  );
};
export default SharedComponent;
