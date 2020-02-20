import React, { FormEvent } from "react";

import { registerUser } from "APIServices/users";

import styles from "./modals.module.sass";

import M from "materialize-css";

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".modal");
  var instances = M.Modal.init(elems);
});

export const SignUpModal = () => {
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = await registerUser(formData);

    alert(`error: ${data.error?.message}`);

    if (data.authToken)
      window.localStorage.setItem("auth-token", data.authToken);
  };
  return (
    <div id="signUpModal" className="modal">
      <div className={`modal-content ${styles.modalContent}`}>
        <h4>Sign Up</h4>
        <form
          className={`form register-form ${styles.form}`}
          onSubmit={e => submitHandler(e)}
        >
          <input
            className="form-input input-field validate"
            placeholder="Username"
            name="username"
            type="text"
            // value="123"
            required
          />

          <input
            className="form-input validate"
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            // value="123456"
            required
          />

          <input
            className="form-input validate"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            // value="1@mail.com"
            required
          />
          <div className={styles.buttons}>
            <button
              type="submit"
              value="Submit"
              className="btn btn-large orange"
            >
              Submit
            </button>
            <button
              className="modal-close btn btn-large red"
              onClick={e => e.preventDefault()}
            >
              Close modal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
