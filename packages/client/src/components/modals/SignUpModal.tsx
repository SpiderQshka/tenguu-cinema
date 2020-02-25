import React, { FormEvent, useRef } from "react";
import { call } from "redux-saga/effects";

import { registerUser } from "APIServices/users";

import styles from "./modals.module.sass";

import M from "materialize-css";

export const SignUpModal = (props: any) => {
  const signUpModalRef = useRef(null);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    await props.registerUser(formData);

    // if (!props.error) {
    //   const btnInstance = M.Modal.getInstance(
    //     signUpModalRef.current || new HTMLButtonElement()
    //   );

    //   btnInstance.close();
    // }

    console.log("Modal Error:", props.error);
  };
  return (
    <div id="signUpModal" className="modal" ref={signUpModalRef}>
      <div className={`modal-content ${styles.modalContent}`}>
        <h4>Sign Up</h4>
        {props.error ? (
          <h5 className={styles.errorMsg}>{props.error}</h5>
        ) : null}
        <form
          className={`form register-form ${styles.form}`}
          onSubmit={submitHandler}
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
