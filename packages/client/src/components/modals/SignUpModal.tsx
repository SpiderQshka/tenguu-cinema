import React, { FormEvent } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Input,
  FormHelperText
} from "@material-ui/core";
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
    <Dialog
      onClose={props.closeRegisterModal}
      aria-labelledby="customized-dialog-title"
      open={props.modals.isRegModalOpen}
    >
      <DialogTitle id="customized-dialog-title">Sign Up</DialogTitle>
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
          <FormControl required>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              id="username"
              type="text"
              name="username"
              className={styles.input}
            />
          </FormControl>
          <FormControl required>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input
              id="email"
              type="email"
              name="email"
              className={styles.input}
            />
          </FormControl>
          <FormControl required>
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
          onClick={props.closeRegisterModal}
          color="secondary"
          className={styles.closeModalBtn}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
