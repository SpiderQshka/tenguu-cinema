import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { IFilm } from "interfaces/IFilm";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import { FilmBlock } from "pages/homepage/components/comingSoon/FilmBlock";

const mockStore = configureStore();

export const render = (params?: any) => {
  const props = {
    film: {} as IFilm,
    buyTicket: jest.fn(),
    toggleDescription: jest.fn(),
    ...params,
  };
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
        <FilmBlock {...props} />
      </IntlProvider>
    </Provider>
  );
  return { enzymeWrapper, props };
};

describe("Film block", () => {
  it("Renders self and subcomponents", () => {
    let { enzymeWrapper } = render({
      film: {
        name: "1",
        id: "1",
      },
    });
    expect(enzymeWrapper.find(".filmBlock").hostNodes()).toHaveLength(1);
    expect(enzymeWrapper.find(".filmName").hostNodes()).toHaveLength(1);
  });
  it("Renders ratings (if provided)", () => {
    let { enzymeWrapper } = render({
      film: {
        name: "2",
        id: "1",
        genres: [],
      },
    });
    expect(enzymeWrapper.find(".rating").hostNodes()).toHaveLength(0);

    enzymeWrapper = render({
      film: {
        name: "3",
        id: "1",
        genres: [],
        ratings: [],
      },
    }).enzymeWrapper;
    expect(enzymeWrapper.find(".rating").hostNodes()).toHaveLength(0);
  });
  it("Renders genres (if provided)", () => {
    let { enzymeWrapper } = render({
      film: {
        name: "4",
        id: "1",
      },
    });
    expect(enzymeWrapper.find(".genres").hostNodes()).toHaveLength(0);

    enzymeWrapper = render({
      film: {
        name: "5",
        id: "1",
        genres: [],
      },
    }).enzymeWrapper;
    expect(enzymeWrapper.find(".genres").hostNodes()).toHaveLength(1);
  });
  it("Calls buyTicket function after preOrderBtn click, if user is authentificate", () => {
    let { enzymeWrapper, props } = render({
      film: {
        name: "6",
        id: "1",
      },
      isAuthentificate: true,
    });

    enzymeWrapper
      .find(".preOrderBtn")
      .hostNodes()
      .simulate("click");

    expect(props.buyTicket.mock.calls.length).toBe(1);
  });
});
