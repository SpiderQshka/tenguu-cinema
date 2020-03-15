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
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import styles from "./modals.module.sass";
import { FormattedMessage, FormattedDate } from "react-intl";
import { ITicket } from "interfaces/ITicket";
import { ISession } from "interfaces/ISession";

export const WatchTrailerModal = (props: any) => {
  console.log(props);

  return (
    <Dialog
      onClose={props.closeModal}
      open={props.isModalOpen}
      className={styles.watchTrailerModal}
    >
      <DialogTitle>
        <FormattedMessage
          id="homepage.button.watchTrailer"
          defaultMessage="Watch trailer"
        />
      </DialogTitle>
      <DialogContent dividers>
        <div className={styles.trailerContainer}>
          <iframe
            className={styles.filmTrailer}
            title="Trailer"
            src={props.film && props.film.trailerLink}
          ></iframe>
        </div>
      </DialogContent>
      <DialogActions>
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
