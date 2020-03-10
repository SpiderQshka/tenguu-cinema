import React, { FormEvent } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Input
} from "@material-ui/core";
import styles from "./modals.module.sass";

export const SignInModal = (props: any) => {
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    let object: any = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    var json = JSON.stringify(object);

    await props.loginUser(json);

    props.closeLoginModalRequest();
  };
  return (
    <Dialog
      onClose={props.closeLoginModal}
      aria-labelledby="customized-dialog-title"
      open={props.modals.isLoginModalOpen}
    >
      <DialogTitle id="customized-dialog-title">Sign In</DialogTitle>
      <DialogContent dividers>
        {props.users.error ? (
          <Typography variant="overline" className={styles.errorMsg}>
            <i className={`fas fa-exclamation-circle ${styles.errorIcon}`}></i>
            {props.users.error.message}
          </Typography>
        ) : null}
        <form
          name="form"
          id="form"
          className={styles.form}
          onSubmit={submitHandler}
        >
          <FormControl>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input
              id="email"
              type="email"
              name="email"
              className={styles.input}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type="password"
              name="password"
              className={styles.input}
            />
          </FormControl>
        </form>
      </DialogContent>
      <DialogActions>
        <Button
          type="submit"
          form="form"
          value="Submit"
          autoFocus
          color="primary"
          className={styles.submitBtn}
        >
          Submit
        </Button>
        <Button
          onClick={props.closeLoginModal}
          color="secondary"
          className={styles.closeModalBtn}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
