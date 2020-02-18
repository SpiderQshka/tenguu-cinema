import React, { FormEvent } from "react";
import { loginUser } from "APIServices/users";
import { IUser } from "interfaces/IUser";
import "../forms.sass";

export function LoginForm() {
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = await loginUser(formData);

    if (data.body && data.body._id)
      window.localStorage.setItem("userId", data.body._id);

    if (data.authToken)
      window.localStorage.setItem("auth-token", data.authToken);
  };
  return (
    <form className="form login-form" onSubmit={e => submitHandler(e)}>
      <h2>Login</h2>
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
