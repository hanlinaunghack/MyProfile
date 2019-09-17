import React from "react";
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
      </nav>
    </div>
  );
};
export default SharedComponent;
