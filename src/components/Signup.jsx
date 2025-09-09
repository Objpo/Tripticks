import React from "react";
import "../style.css";

function Signup({ goToLogin }) {
  return (
    <div className="wrapper">
      <form action="#">
        <h2>Sign Up</h2>
        <div className="input-field">
          <input type="text" required />
          <label>Enter your name</label>
        </div>
        <div className="input-field">
          <input type="email" required />
          <label>Enter your email</label>
        </div>
        <div className="input-field">
          <input type="password" required />
          <label>Create a password</label>
        </div>
        <div className="input-field">
          <input type="password" required />
          <label>Confirm password</label>
        </div>
        <button type="submit">Sign Up</button>
        <div className="register">
          <p>
            Already have an account?{" "}
            <a href="#" onClick={goToLogin}>
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
