import React, { Component } from "react";
import "./NeoLoginForm.css";

export default class NeoLoginForm extends Component {
  render() {
    return (
      <div className="login-box">
        <div className="container">
          <h1>NEOMORPHISM LOGIN-REGISTER FORM</h1>
          <div className="d-flex">
            <div className="form-box">
              <h2>LOGIN</h2>
              <form className="input-group">
                <label>Username</label>
                <input
                  type="email"
                  className="input-field"
                  placeholder="example@Gmail.com"
                />
                <label>Password</label>
                <input
                  type="password"
                  className="input-field"
                  placeholder="Password"
                />
                <input
                  type="submit"
                  className="input-field input-submit"
                  value="Register"
                />
                <p className="forget">
                  Forget Password ? <a href="asd">Click Here</a>
                </p>
              </form>
            </div>
              <div className="form-box">
                <h2>REGISTER</h2>
                <form className="input-group">
                  <label>Username</label>
                  <input
                    type="email"
                    className="input-field"
                    placeholder="example@Gmail.com"
                  />
                  <label>Password</label>
                  <input
                    type="password"
                    className="input-field"
                    placeholder="Password"
                  />
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="input-field"
                    placeholder="Confirm Password"
                  />
                  <input
                    type="submit"
                    className="input-field input-submit"
                    value="Register"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
