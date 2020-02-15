import React, { FormEvent } from "react";
import { registerUser } from "../../../APIServices/UsersServices";
import "../forms.sass";

export function RegisterForm() {
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = await registerUser(formData);

    if (data.authToken)
      window.localStorage.setItem("auth-token", data.authToken);
  };
  return (
    <form className="form register-form" onSubmit={e => submitHandler(e)}>
      <h2>Register</h2>
      <input
        className="form-input validate"
        placeholder="Username"
        name="username"
        type="text"
        value="123"
        required
      />

      <input
        className="form-input validate"
        id="password"
        type="password"
        name="password"
        placeholder="Password"
        value="123456"
        required
      />

      <input
        className="form-input validate"
        id="email"
        type="email"
        placeholder="Email"
        name="email"
        value="1@mail.com"
        required
      />
      <button
        type="submit"
        value="Submit"
        className="waves-effect waves-light btn"
      >
        Submit
      </button>
    </form>
  );
}
