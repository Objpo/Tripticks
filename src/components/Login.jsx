import React from "react";
import "../style.css";

function Login({ goToSignup, goToForgot }) {
  return (
    <div className="wrapper">
      <form action="#">
        <h2>Login</h2>
        <div className="input-field">
          <input type="text" required />
          <label>Enter your email</label>
        </div>
        <div className="input-field">
          <input type="password" required />
          <label>Enter your password</label>
        </div>
        <div className="forget">
          <label>
            <input type="checkbox" />
            <p>Remember me</p>
          </label>
          <a href="#" onClick={goToForgot}>
            Forgot password?
          </a>
        </div>
        <button type="submit">Log In</button>
        <div className="register">
          <p>
            Don't have an account?{" "}
            <a href="#" onClick={goToSignup}>
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
