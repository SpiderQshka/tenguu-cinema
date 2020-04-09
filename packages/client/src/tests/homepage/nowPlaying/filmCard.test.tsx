import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { IFilm } from "interfaces/IFilm";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import { FilmCard } from "components/filmCard";

const mockStore = configureStore();

export const renderFilmCard = (params?: any) => {
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
        <FilmCard {...props} />
      </IntlProvider>
    </Provider>
  );
  return { enzymeWrapper, props };
};

describe("Film card", () => {
  it("Renders self", () => {
    let { enzymeWrapper } = renderFilmCard({
      item: { name: "1", id: 1 },
    });
    expect(enzymeWrapper.find(".card").hostNodes()).toHaveLength(1);
  });
  it("Calls watchTrailer function after watchTrailerBtn click", () => {
    let { enzymeWrapper, props } = renderFilmCard({
      item: {
        name: 1,
        id: 1,
        genres: [
          { name: 1, id: 1 },
          { name: 2, id: 1 },
        ],
      },
    });

    enzymeWrapper
      .find(".watchTrailerBtn")
      .hostNodes()
      .simulate("click");

    expect(props.watchTrailer.mock.calls.length).toBe(1);
  });
  it("Calls buyTicket function after buyTicketBtn click", () => {
    let { enzymeWrapper, props } = renderFilmCard({
      item: {
        name: 1,
        id: 1,
        genres: [
          { name: 1, id: 1 },
          { name: 2, id: 1 },
        ],
      },
    });

    enzymeWrapper
      .find(".buyTicketBtn")
      .hostNodes()
      .simulate("click");

    expect(props.buyTicket.mock.calls.length).toBe(1);
  });
});
