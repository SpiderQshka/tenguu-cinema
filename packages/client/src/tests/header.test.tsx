import React from "react";
import { HeaderProps } from "containers/HeaderContainer";
import { Header } from "pages/homepage/components/header";
import { shallow, mount, render } from "enzyme";
import { IUser } from "interfaces/IUser";
import { Logo } from "pages/homepage/components/header/Logo";

export const renderHeader = () => {
  const props = {
    buyTicket: jest.fn(),
    changeLang: jest.fn(),
    currentUserTickets: [],
    films: [],
    lang: "en",
    logout: jest.fn(),
    modals: {
      isRegModalOpen: false,
      isLoginModalOpen: false,
      isBuyTicketModalOpen: false,
      isUserTicketsModalOpen: false,
      isWatchTrailerModalOpen: false
    },
    openLoginModal: jest.fn(),
    openRegisterModal: jest.fn(),
    openUserTicketsModal: jest.fn(),
    users: {
      currentUser: {} as IUser,
      error: null,
      currentUserPending: true
    }
  } as HeaderProps;
  const enzymeWrapper = shallow(<Header {...props} />);
  return enzymeWrapper;
};

describe("Header component", () => {
  it("Renders self and subcomponents", () => {
    const enzymeWrapper = renderHeader();
    expect(enzymeWrapper.find("section").children()).toHaveLength(1);
  });
});
