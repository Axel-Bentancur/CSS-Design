import React, { Component } from "react";
import "./NeoCheckButton.css";

export default class NeoCheckButton extends Component {
  render() {
    return (
      <div className="button-box">
        <div className="container">
          <h1>NEOMORPHISM CHECK BUTTON</h1>
          <div className="d-flex">
            <div className="check-box">
              <input type="checkbox" className="check" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
