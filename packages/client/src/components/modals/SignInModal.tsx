import React, { FormEvent, useRef } from "react";

import { loginUser } from "APIServices/users";

import styles from "./modals.module.sass";

import M from "materialize-css";

export const SignInModal = (props: any) => {
  const signInModalRef = useRef(null);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = await loginUser(formData);

    props.loginUser(data.authToken, data?.body?._id);

    const btnInstance = M.Modal.getInstance(
      signInModalRef.current || new HTMLButtonElement()
    );

    btnInstance.close();
  };
  return (
    <div id="signInModal" className="modal" ref={signInModalRef}>
      <div className={`modal-content ${styles.modalContent}`}>
        <h4>Sign In</h4>
        <form
          className={`form register-form ${styles.form}`}
          onSubmit={submitHandler}
        >
          <input
            className="form-input validate"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            // value="1@mail.com"
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
