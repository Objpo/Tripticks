import React, { useState } from "react";
import "../style.css";

function ForgotPassword({ goToLogin }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      alert("⚠️ Please enter your email!");
      return;
    }
    alert(`📧 A password reset link has been sent to: ${email}`);
    setEmail(""); // reset input
    goToLogin(); // quay lại login
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        <div className="input-field">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
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
