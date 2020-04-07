import React from "react";
import { HeaderProps } from "containers/HeaderContainer";
import { IUser } from "interfaces/IUser";
import { MenuComponent } from "pages/homepage/components/header/Menu";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { createMount } from "@material-ui/core/test-utils";

const mockStore = configureStore();

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
  const store = mockStore({});
  const enzymeWrapper = mount(
    <Provider store={store}>
      <MenuComponent {...props} />
    </Provider>
  );
  return { enzymeWrapper, props, store };
};

describe("Menu", () => {
  it("Renders self and subcomponents", () => {
    const { enzymeWrapper } = renderMenu();
    expect(enzymeWrapper.find("#menuBlock").children()).toHaveLength(4);
  });
  it("Autocomplete options change depends on props", () => {
    let { enzymeWrapper } = renderMenu({ films: [1, 2, 3] });
    expect(
      enzymeWrapper
        .find("#searchbar")
        .first()
        .prop("options")
    ).toStrictEqual([1, 2, 3]);
    enzymeWrapper = renderMenu({ films: [] }).enzymeWrapper;
    expect(
      enzymeWrapper
        .find("#searchbar")
        .first()
        .prop("options")
    ).toStrictEqual([]);
  });
  it("Menu opens on openMenuBtn click", () => {
    let { enzymeWrapper } = renderMenu();
    expect(
      enzymeWrapper
        .find("#menu")
        .first()
        .prop("open")
    ).toBe(false);
    enzymeWrapper
      .find("#openMenuBtn")
      .first()
      .simulate("click");
    expect(
      enzymeWrapper
        .find("#menu")
        .first()
        .prop("open")
    ).toBe(true);
  });
  it("Searchbar opens on openSearchbarBtn click", () => {
    let { enzymeWrapper } = renderMenu();
    enzymeWrapper
      .find("#openSearchbarBtn")
      .first()
      .simulate("click");
    expect(
      enzymeWrapper
        .find("#searchbar")
        .first()
        .hasClass("activeSearchBar")
    ).toBe(true);

    enzymeWrapper
      .find("#openSearchbarBtn")
      .first()
      .simulate("click");
    expect(
      enzymeWrapper
        .find("#searchbar")
        .first()
        .hasClass("activeSearchBar")
    ).toBe(false);
  });
  it("Menu closes on logoutBtn click", () => {
    let { enzymeWrapper } = renderMenu({
      users: { currentUser: { id: "exisits" } },
    });
    enzymeWrapper
      .find("#openMenuBtn")
      .first()
      .simulate("click");
    enzymeWrapper
      .find("#logoutBtn")
      .first()
      .simulate("click");
    expect(
      enzymeWrapper
        .find("#menu")
        .first()
        .prop("open")
    ).toBe(false);
  });
  it("Menu shows 'admin panel' tab in case users status is 'admin', otherwise doesn't", () => {
    let { enzymeWrapper } = renderMenu({
      users: { currentUser: { id: "exists", status: "admin" } },
    });
    expect(enzymeWrapper.find("#adminPanelTab").length).not.toBe(0);

    enzymeWrapper = renderMenu({
      users: { currentUser: { id: "exists", status: "default" } },
    }).enzymeWrapper;
    expect(enzymeWrapper.find("#adminPanelTab").length).toBe(0);
  });
  it("Menu doesn't render any items in case none userId is provided", () => {
    let { enzymeWrapper } = renderMenu({
      users: { currentUser: {} },
    });
    expect(enzymeWrapper.find(".menuItem").length).toBe(0);
  });
});
