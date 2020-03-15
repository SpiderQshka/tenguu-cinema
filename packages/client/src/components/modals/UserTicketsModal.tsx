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
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import styles from "./modals.module.sass";
import { FormattedMessage } from "react-intl";

export const UserTicketsModal = (props: any) => {
  console.log(props);

  //   const submitHandler = async (e: FormEvent) => {
  //     e.preventDefault();
  //     const formData = new FormData(e.target as HTMLFormElement);

  //     const object: any = {};
  //     formData.forEach((value, key) => {
  //       object[key] = value;
  //     });
  //     const json = JSON.stringify(object);

  //     await props.loginUser(json);

  //     props.closeLoginModalRequest();
  //   };
  return (
    <Dialog
      onClose={props.closeModal}
      open={props.modals.isUserTicketsModalOpen}
    >
      <DialogTitle>
        {/* <FormattedMessage
          id="homepage.modal.signIn.title"
          defaultMessage="Sign In"
        /> */}
        Tickets
      </DialogTitle>
      <DialogContent dividers>
        <List>
          <ListItem>
            <ListItemAvatar>
              <i className="fas fa-ticket-alt"></i>
            </ListItemAvatar>
            <ListItemText primary="Ticket" secondary="Date"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <i className="fas fa-ticket-alt"></i>
            </ListItemAvatar>
            <ListItemText primary="Ticket" secondary="Date"></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <i className="fas fa-ticket-alt"></i>
            </ListItemAvatar>
            <ListItemText primary="Ticket" secondary="Date"></ListItemText>
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        {/* <Button
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
        </Button> */}
        <Button
          onClick={props.closeModal}
          color="secondary"
          className={styles.closeModalBtn}
        >
          <FormattedMessage id="homepage.modal.close" defaultMessage="Close" />
        </Button>
      </DialogActions>
    </Dialog>
  );
};
