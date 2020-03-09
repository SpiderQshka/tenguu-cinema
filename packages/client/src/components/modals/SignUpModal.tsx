import React, { FormEvent } from "react";

import styles from "./modals.module.sass";

export const SignUpModal = (props: any) => {
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    let object: any = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    var json = JSON.stringify(object);

    await props.registerUser(json);

    props.closeRegisterModalRequest();
  };
  return (
    <div className={styles.modalWrapper}>
      <div className={`${styles.modalContent}`}>
        <h4 className={styles.modalHeader}>Sign Up</h4>
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
            placeholder="Username"
            name="username"
            type="text"
            // value="123"
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

          <input
            className="validate"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            // value="1@mail.com"
            required
          />
          <div className={`file-field input-field ${styles.fileField}`}>
            <div className="waves-effect waves-light btn orange">
              <span>Photo</span>
              <input type="file" name="photo" />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>
          <div className={styles.buttons}>
            <button
              type="submit"
              value="Submit"
              className={`waves-effect waves-light btn btn-large orange ${styles.submitBtn}`}
            >
              Submit
            </button>
            <button
              className={`waves-effect waves-light btn btn-floating red ${styles.closeModalBtn}`}
              onClick={props.closeRegisterModal}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
