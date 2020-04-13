import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { IFilm } from "interfaces/IFilm";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import { ComingSoonFilmCard } from "components/filmCard";

const mockStore = configureStore();

export const render = (params?: any) => {
  const props = {
    item: {} as IFilm,
    buyTicket: jest.fn(),
    watchTrailer: jest.fn(),
    ...params,
  };
  const store = mockStore({});
  const enzymeWrapper = mount(
    <Provider store={store}>
      <IntlProvider locale="en">
        <ComingSoonFilmCard {...props} />
      </IntlProvider>
    </Provider>
  );
  return { enzymeWrapper, props };
};

describe("Coming soon film card", () => {
  it("Renders self", () => {
    let { enzymeWrapper } = render({
      item: { name: "1", id: 1 },
    });
    expect(
      enzymeWrapper
        .find(".card")
        .hostNodes()
        .hasClass("sessionCard")
    ).toBe(true);
    expect(enzymeWrapper.find(".film-name").hostNodes()).toHaveLength(1);
    expect(enzymeWrapper.find(".date").hostNodes()).toHaveLength(1);
  });
  it("Renders ratings (if provided)", () => {
    let { enzymeWrapper } = render({
      item: {
        name: "1",
        id: "1",
        genres: [],
      },
    });
    expect(enzymeWrapper.find(".rating").hostNodes()).toHaveLength(0);

    enzymeWrapper = render({
      item: {
        name: "1",
        id: "1",
        genres: [],
        ratings: [],
      },
    }).enzymeWrapper;
    expect(enzymeWrapper.find(".rating").hostNodes()).toHaveLength(0);
  });
});
