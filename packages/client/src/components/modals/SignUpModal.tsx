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
  Input,
} from "@material-ui/core";
import styles from "./modals.module.sass";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { SignUpModalProps } from "containers/modals/SignUpModalContainer";

async function encodeImageFileAsURL(photo: any) {
  return photo
    ? new Promise((res, rej) => {
        const reader = new FileReader();
        reader.readAsDataURL(photo);
        reader.onloadend = function() {
          if (reader.error) {
            res(null);
          }
          res(reader.result);
        };
      })
    : Promise.resolve(null);
}

export const SignUpModal = (props: SignUpModalProps) => {
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    let object: any = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });

    object.photo = await encodeImageFileAsURL(object.photo);

    const json = JSON.stringify(object);

    await props.registerUser(json);
    props.closeRegisterModalRequest();
  };
  return (
    <Dialog
      onClose={props.closeRegisterModal}
      aria-labelledby="customized-dialog-title"
      open={props.modals.isRegModalOpen}
    >
      <DialogTitle id="customized-dialog-title">
        <FormattedMessage
          id="homepage.modal.signUp.title"
          defaultMessage="Sign Up"
        />
      </DialogTitle>
      <DialogContent dividers>
        {props.users.error ? (
          <Typography variant="overline" className={styles.errorMsg}>
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className={styles.errorIcon}
            />
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
            <InputLabel htmlFor="username">
              <FormattedMessage
                id="homepage.modal.signIn.username"
                defaultMessage="Username"
              />
            </InputLabel>
            <Input
              id="username"
              type="text"
              name="username"
              className={styles.input}
            />
          </FormControl>
          <FormControl required>
            <InputLabel htmlFor="email">
              <FormattedMessage
                id="homepage.modal.email"
                defaultMessage="Email"
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
          <input
            accept="image/*"
            className={`${styles.input} ${styles.photoInput}`}
            id="photo"
            type="file"
            name="photo"
          />
          <label htmlFor="photo">
            <Button component="span" className={styles.photoBtn}>
              <FormattedMessage
                id="homepage.modal.photo"
                defaultMessage="photo"
              />
            </Button>
          </label>
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
          onClick={props.closeRegisterModal}
          color="secondary"
          className={styles.closeModalBtn}
        >
          <FormattedMessage id="homepage.modal.close" defaultMessage="Close" />
        </Button>
      </DialogActions>
    </Dialog>
  );
};
