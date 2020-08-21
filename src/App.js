import React from "react";
import "./App.css";
import NeoMediaicons from "./components/neomorphism/NeoMediaicons";
import NeoLoginForm from "./components/neomorphism/NeoLoginForm";
import NeoCheckButton from "./components/neomorphism/NeoCheckButton";

function App() {
  return (
    <div className="container">
      <NeoMediaicons />
      <NeoLoginForm />
      <NeoCheckButton />
    </div>
  );
}

export default App;
