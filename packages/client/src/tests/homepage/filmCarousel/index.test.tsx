import React from "react";
import { FilmCarousel } from "pages/homepage/components/filmCarousel";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { IFilmPayload } from "interfaces/IFilm";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";

const mockStore = configureStore();

export const renderFilmCarousel = (params?: any) => {
  const props = {
    films: {} as IFilmPayload,
    buyTicket: jest.fn(),
    watchTrailer: jest.fn(),
    isAuthentificate: false,
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
        <FilmCarousel {...props} />
      </IntlProvider>
    </Provider>
  );
  return { enzymeWrapper, props };
};

describe("Film Carousel", () => {
  it("Renders self and slides", () => {
    let { enzymeWrapper } = renderFilmCarousel({
      films: {
        data: [],
      },
    });
    expect(enzymeWrapper.find(".film-carousel").hostNodes()).toHaveLength(1);
    expect(enzymeWrapper.find(".slide-wrapper").hostNodes()).toHaveLength(0);
    enzymeWrapper = renderFilmCarousel({
      films: {
        data: [
          {
            name: 1,
            id: 1,
            genres: [
              { name: 2, id: 2 },
              { name: 3, id: 3 },
            ],
          },
          {
            name: 4,
            id: 2,
            genres: [
              { name: 5, id: 4 },
              { name: 6, id: 5 },
            ],
          },
        ],
        pending: false,
      },
    }).enzymeWrapper;
    expect(enzymeWrapper.find(".slick-slide").hostNodes()).toHaveLength(2);
  });
  it("Renders genres on slide", () => {
    let { enzymeWrapper } = renderFilmCarousel({
      films: {
        data: [
          {
            name: 1,
            id: 1,
            genres: [
              { name: 2, id: 2 },
              { name: 3, id: 3 },
            ],
          },
        ],
      },
    });
    expect(enzymeWrapper.find(".genre").hostNodes()).toHaveLength(2);
    enzymeWrapper = renderFilmCarousel({
      films: {
        data: [
          {
            name: 1,
            id: 1,
            genres: [],
          },
        ],
      },
    }).enzymeWrapper;
    expect(enzymeWrapper.find(".genre").hostNodes()).toHaveLength(0);
  });
  it("Renders ratings on slide", () => {
    let { enzymeWrapper } = renderFilmCarousel({
      films: {
        data: [
          {
            name: 1,
            id: 1,
            ratings: [
              {
                raterName: "1",
                raterValue: 1,
              },
            ],
          },
        ],
      },
    });

    expect(enzymeWrapper.find(".rating-element").hostNodes()).toHaveLength(1);

    enzymeWrapper = renderFilmCarousel({
      films: {
        data: [
          {
            name: 1,
            id: 1,
          },
        ],
      },
    }).enzymeWrapper;

    expect(enzymeWrapper.find(".rating-element").hostNodes()).toHaveLength(0);
  });
  it("Calls watchTrailer function after watchTrailerBtn click", () => {
    let { enzymeWrapper, props } = renderFilmCarousel({
      films: {
        data: [
          {
            name: 1,
            id: 1,
            genres: [
              { name: 2, id: 2 },
              { name: 3, id: 3 },
            ],
            trailerLink: "exists",
          },
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
    let { enzymeWrapper, props } = renderFilmCarousel({
      isAuthentificate: true,
      films: {
        data: [
          {
            name: 1,
            id: 1,
            genres: [
              { name: 2, id: 2 },
              { name: 3, id: 3 },
            ],
          },
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
