import { connect, ConnectedProps } from "react-redux";

import { Header } from "pages/homepage/components/header";
import { IState } from "interfaces/IState";
import { userLogoutRequest } from "actions/users";
import {
  openRegModal,
  openLoginModal,
  openUserTicketModal,
  openBuyTicketModal,
} from "actions/modals";
import { changeLang } from "actions/lang";
import {
  currentTicketsSelector,
  isUserAuthentificateSelector,
} from "selectors";
import { changeActiveFilmForBuying } from "actions/films";

const mapStateToProps = (state: IState) => {
  return {
    users: state.users,
    currentUserTickets: currentTicketsSelector(state),
    modals: state.modals,
    lang: state.lang.currentLang,
    films: state.films.data,
    isAuthentificate: isUserAuthentificateSelector(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(userLogoutRequest()),
    openRegisterModal: () => dispatch(openRegModal()),
    openLoginModal: () => dispatch(openLoginModal()),
    openUserTicketsModal: () => dispatch(openUserTicketModal()),
    changeLang: (lang: string) => dispatch(changeLang(lang)),
    buyTicket: (filmId: string) => {
      dispatch(changeActiveFilmForBuying(filmId));
      dispatch(openBuyTicketModal());
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type HeaderProps = ConnectedProps<typeof connector>;

export default connector(Header);
