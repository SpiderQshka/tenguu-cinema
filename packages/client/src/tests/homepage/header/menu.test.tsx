import React from "react";
import { HeaderProps } from "containers/HeaderContainer";
import { IUser } from "interfaces/IUser";
import { MenuComponent } from "pages/homepage/components/header/Menu";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";

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
  const store = mockStore({
    users: {
      currentUser: {
        id: "",
      },
    },
  });
  const enzymeWrapper = mount(
    <Provider store={store}>
      <IntlProvider locale="en">
        <MenuComponent {...props} />
      </IntlProvider>
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
      isAuthentificate: true,
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
  it("Menu shows 'admin panel' tab in case users status is 'admin' or 'manager', otherwise doesn't", () => {
    let { enzymeWrapper } = renderMenu({
      isAuthentificate: true,
      isAdminOrManager: true,
      // users: { currentUser: { id: "exists", status: "admin" } },
    });
    expect(enzymeWrapper.find("#adminPanelTab").hostNodes().length).toBe(1);

    enzymeWrapper = renderMenu({
      isAuthentificate: true,
    }).enzymeWrapper;
    expect(enzymeWrapper.find("#adminPanelTab").length).toBe(0);
  });
  it("Menu doesn't render any items in case user is not authentificated", () => {
    let { enzymeWrapper } = renderMenu({
      isAuthentificate: false,
    });
    expect(enzymeWrapper.find(".menuItem").length).toBe(0);
  });
});
