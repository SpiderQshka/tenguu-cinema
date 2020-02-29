import React, { FormEvent } from "react";

import styles from "./modals.module.sass";

export const SignInModal = (props: any) => {
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    await props.loginUser(formData);

    props.closeLoginModalRequest();
  };
  return (
    <div className={styles.modalWrapper}>
      <div className={`${styles.modalContent}`}>
        <h4 className={styles.modalHeader}>Sign In</h4>
        {props.error ? (
          <h5 className={styles.errorMsg}>
            <i className={`fas fa-exclamation-circle ${styles.errorIcon}`}></i>
            {props.error.message}
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
              className={`btn btn-large orange ${styles.submitBtn}`}
            >
              Submit
            </button>
            <button
              className={`waves-effect waves-light btn btn-floating red ${styles.closeModalBtn}`}
              onClick={props.closeLoginModal}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
