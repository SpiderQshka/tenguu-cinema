import React from "react";
import { RegisterForm } from "./registerForm";
import { LoginForm } from "./loginForm";

export function Forms() {
  return (
    <div className="form-container">
      <RegisterForm />
      <LoginForm />
    </div>
  );
}
