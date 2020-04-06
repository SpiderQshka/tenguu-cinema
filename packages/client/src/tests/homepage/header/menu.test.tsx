import React from "react";
import { HeaderProps } from "containers/HeaderContainer";
import { IUser } from "interfaces/IUser";
import { MenuComponent } from "pages/homepage/components/header/Menu";
import { shallow, mount, render } from "enzyme";
import { storeFactory } from "../index.test";
import { Provider } from "react-redux";

export const renderMenu = (params?: any) => {
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
      isWatchTrailerModalOpen: false,
    },
    openLoginModal: jest.fn(),
    openRegisterModal: jest.fn(),
    openUserTicketsModal: jest.fn(),
    users: {
      currentUser: {} as IUser,
      error: null,
      currentUserPending: true,
    },
    ...params,
  } as HeaderProps;
  const store = storeFactory({});
  const enzymeWrapper = shallow(<MenuComponent {...props} />);
  return { enzymeWrapper, props };
};

describe("Menu", () => {
  it("Renders self and subcomponents", () => {
    const { enzymeWrapper } = renderMenu();
    expect(enzymeWrapper.children()).toHaveLength(1);
    //expect(enzymeWrapper.find("#menuBlock").children()).toHaveLength(4);
  });
  //   it("Autocomplete options change depends on props", () => {
  //     let { enzymeWrapper } = renderMenu({ films: [1, 2, 3] });
  //     expect(
  //       enzymeWrapper
  //         .find("#menuBlock")
  //         .find("#searchbar")
  //         .prop("options")
  //     ).toBe(3);
  //     enzymeWrapper = renderMenu({ films: [] }).enzymeWrapper;
  //     expect(
  //       enzymeWrapper
  //         .find("#menuBlock")
  //         .find("#searchbar")
  //         .prop("options")
  //     ).toBe(0);
  //   });
});
