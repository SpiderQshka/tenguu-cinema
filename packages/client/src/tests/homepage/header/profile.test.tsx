import React from "react";
import { HeaderProps } from "containers/HeaderContainer";
import { IUser } from "interfaces/IUser";
import { Profile } from "pages/homepage/components/header/Profile";
import { shallow, mount, render } from "enzyme";

export const renderProfile = (params?: any) => {
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
  const enzymeWrapper = shallow(<Profile {...props} />);
  return { enzymeWrapper, props };
};

describe("Profile", () => {
  it("Renders self", () => {
    const { enzymeWrapper } = renderProfile();
    expect(enzymeWrapper.children()).toHaveLength(1);
  });
  it("If props contain 'id' - renders profile", () => {
    const { enzymeWrapper } = renderProfile({
      users: { currentUser: { id: "exists" } },
    });
    expect(enzymeWrapper.find("#profileBlock")).toHaveLength(1);
  });
  it("If props don't contain 'id' - renders unauth block", () => {
    const { enzymeWrapper } = renderProfile();
    expect(enzymeWrapper.find("#unauthBlock")).toHaveLength(1);
  });
  describe("Authorized profile", () => {
    it("Profile contains userBlock and ticketsBlock", () => {
      const { enzymeWrapper } = renderProfile({
        users: { currentUser: { id: "exists" } },
      });
      expect(
        enzymeWrapper.find("#profileBlock").find("#userBlock")
      ).toHaveLength(1);
      expect(
        enzymeWrapper.find("#profileBlock").find("#ticketsBlock")
      ).toHaveLength(1);
    });
    it("userBlock contains either user photo or placeholder (if photo isn't provided)", () => {
      let { enzymeWrapper } = renderProfile({
        users: { currentUser: { id: "exists", photo: "exists" } },
      });
      expect(
        enzymeWrapper
          .find("#profileBlock")
          .find("#userBlock")
          .find("#userPhotoBlock")
          .find("#userPhoto")
      ).toHaveLength(1);

      enzymeWrapper = renderProfile({
        users: { currentUser: { id: "exists", photo: null } },
      }).enzymeWrapper;

      expect(
        enzymeWrapper
          .find("#profileBlock")
          .find("#userBlock")
          .find("#userPhotoBlock")
          .find("#userPhotoPlaceholder")
      ).toHaveLength(1);
    });
    it("ticketsBlock containts button with default value", () => {
      let { enzymeWrapper } = renderProfile({
        users: { currentUser: { id: "exists" } },
      });
      expect(
        enzymeWrapper
          .find("#profileBlock")
          .find("#ticketsBlock")
          .children()
          .first()
          .prop("badgeContent")
      ).toBe(0);

      enzymeWrapper = renderProfile({
        users: { currentUser: { id: "exists" } },
        currentUserTickets: [1, 2, 3],
      }).enzymeWrapper;

      expect(
        enzymeWrapper
          .find("#profileBlock")
          .find("#ticketsBlock")
          .children()
          .first()
          .prop("badgeContent")
      ).toBe(3);
    });
  });
});
