// Actions

export const CLOSE_REG_MODAL = "CLOSE_REG_MODAL";
export const OPEN_REG_MODAL = "OPEN_REG_MODAL";
export const CLOSE_LOGIN_MODAL = "CLOSE_LOGIN_MODAL";
export const OPEN_LOGIN_MODAL = "OPEN_LOGIN_MODAL";
export const CLOSE_REG_MODAL_REQUEST = "CLOSE_REG_MODAL_REQUEST";
export const CLOSE_LOGIN_MODAL_REQUEST = "CLOSE_LOGIN_MODAL_REQUEST";
export const OPEN_BUY_TICKET_MODAL = "OPEN_BUY_TICKET_MODAL";
export const CLOSE_BUY_TICKET_MODAL = "CLOSE_BUY_TICKET_MODAL";
export const CLOSE_BUY_TICKET_MODAL_REQUEST = "CLOSE_BUY_TICKET_MODAL_REQUEST";
export const OPEN_USER_TICKETS_MODAL = "OPEN_USER_TICKETS_MODAL";
export const CLOSE_USER_TICKETS_MODAL = "CLOSE_USER_TICKETS_MODAL";
export const OPEN_WATCH_TRAILER_MODAL = "OPEN_WATCH_TRAILER_MODAL";
export const CLOSE_WATCH_TRAILER_MODAL = "CLOSE_WATCH_TRAILER_MODAL";

// Action creators

export const closeRegModalRequest = () => {
  return {
    type: CLOSE_REG_MODAL_REQUEST,
  };
};

export const closeLoginModalRequest = () => {
  return {
    type: CLOSE_LOGIN_MODAL_REQUEST,
  };
};

export const closeRegModal = () => {
  return {
    type: CLOSE_REG_MODAL,
  };
};

export const openRegModal = () => {
  return {
    type: OPEN_REG_MODAL,
  };
};

export const closeLoginModal = () => {
  return {
    type: CLOSE_LOGIN_MODAL,
  };
};

export const openLoginModal = () => {
  return {
    type: OPEN_LOGIN_MODAL,
  };
};

export const openBuyTicketModal = () => {
  return {
    type: OPEN_BUY_TICKET_MODAL,
  };
};

export const closeBuyTicketModal = () => {
  return {
    type: CLOSE_BUY_TICKET_MODAL,
  };
};

export const closeBuyTicketModalRequest = () => {
  return {
    type: CLOSE_BUY_TICKET_MODAL_REQUEST,
  };
};

export const openUserTicketModal = () => {
  return {
    type: OPEN_USER_TICKETS_MODAL,
  };
};

export const closeUserTicketModal = () => {
  return {
    type: CLOSE_USER_TICKETS_MODAL,
  };
};

export const openWatchTrailerModal = () => {
  return {
    type: OPEN_WATCH_TRAILER_MODAL,
  };
};

export const closeWatchTrailerModal = () => {
  return {
    type: CLOSE_WATCH_TRAILER_MODAL,
  };
};
