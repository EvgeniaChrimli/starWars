import React from "react";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
function RegisterPage() {
  return (
    <>
      <Link to="/auth">
        <p>GoHome</p>
      </Link>
      <h1>Reg</h1>
      <SignUp />
      <Link to="/login">Log</Link>
    </>
  );
}
export default RegisterPage;
