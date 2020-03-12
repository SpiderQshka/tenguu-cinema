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
import { FormattedMessage } from "react-intl";

export const SignInModal = (props: any) => {
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const object: any = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    const json = JSON.stringify(object);

    await props.loginUser(json);

    props.closeLoginModalRequest();
  };
  return (
    <Dialog
      onClose={props.closeLoginModal}
      open={props.modals.isLoginModalOpen}
    >
      <DialogTitle>
        <FormattedMessage
          id="homepage.modal.signIn.title"
          defaultMessage="Sign In"
        />
      </DialogTitle>
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
            <InputLabel htmlFor="email">
              <FormattedMessage
                id="homepage.modal.email"
                defaultMessage="Email address"
              />
            </InputLabel>
            <Input
              id="email"
              type="email"
              name="email"
              className={styles.input}
            />
          </FormControl>
          <FormControl required>
            <InputLabel htmlFor="password">
              <FormattedMessage
                id="homepage.modal.password"
                defaultMessage="Password"
              />
            </InputLabel>
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
          <FormattedMessage
            id="homepage.modal.submit"
            defaultMessage="Submit"
          />
        </Button>
        <Button
          onClick={props.closeLoginModal}
          color="secondary"
          className={styles.closeModalBtn}
        >
          <FormattedMessage id="homepage.modal.close" defaultMessage="Close" />
        </Button>
      </DialogActions>
    </Dialog>
  );
};
