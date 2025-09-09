import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  const [page, setPage] = useState("login");

  return (
    <div>
      {page === "login" && <Login goToSignup={() => setPage("signup")} goToForgot={() => setPage("forgot")} />}
      {page === "signup" && <Signup goToLogin={() => setPage("login")} />}
      {page === "forgot" && <ForgotPassword goToLogin={() => setPage("login")} />}
    </div>
  );
}

export default App;
