import React, { FormEvent, useRef } from "react";

import { loginUser } from "APIServices/users";

import styles from "./modals.module.sass";

import M from "materialize-css";

export const SignInModal = (props: any) => {
  const signInModalRef = useRef(null);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    props.loginUser(formData);

    // const btnInstance = M.Modal.getInstance(
    //   signInModalRef.current || new HTMLButtonElement()
    // );

    // btnInstance.close();
  };
  return (
    <div id="signInModal" className="modal" ref={signInModalRef}>
      <div className={`modal-content ${styles.modalContent}`}>
        <h4>Sign In</h4>
        {props.error ? (
          <h5 className={styles.errorMsg}>
            <i className={`fas fa-exclamation-circle ${styles.errorIcon}`}></i>
            {props.error}
          </h5>
        ) : null}
        <form
          className={`form register-form ${styles.form}`}
          onSubmit={submitHandler}
        >
          <input
            className="validate"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            // value="1@mail.com"
            required
          />
          <input
            className="validate"
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            // value="123456"
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
