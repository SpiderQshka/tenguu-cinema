import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from "@material-ui/core";
import styles from "./modals.module.sass";
import { FormattedMessage } from "react-intl";

export const WatchTrailerModal = (props: any) => {
  return (
    <Dialog
      fullScreen
      onClose={props.closeModal}
      open={props.isModalOpen}
      className={styles.watchTrailerModal}
    >
      <DialogTitle>
        <FormattedMessage
          id="homepage.modal.watchTrailer.header"
          defaultMessage="Watch trailer"
        />{" "}
        "
        <FormattedMessage
          id={props.film ? props.film.name : "homepage.header.profile.loading"}
        />
        "
      </DialogTitle>
      <DialogContent dividers>
        <iframe
          className={styles.filmTrailer}
          title="Trailer"
          src={props.film && props.film.trailerLink}
        ></iframe>
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
