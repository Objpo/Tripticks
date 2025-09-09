import React from "react";
import "../style.css";

function ForgotPassword({ goToLogin }) {
  return (
    <div className="wrapper">
      <form action="#">
        <h2>Forgot Password</h2>
        <div className="input-field">
          <input type="email" required />
          <label>Enter your registered email</label>
        </div>
        <button type="submit">Reset Password</button>
        <div className="register">
          <p>
            Remembered your password?{" "}
            <a href="#" onClick={goToLogin}>
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
