import React from "react";
import { NowPlayingProps } from "containers/NowPlayingContainer";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { IFilm } from "interfaces/IFilm";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import { NowPlaying } from "pages/homepage/components/nowPlaying";

const mockStore = configureStore();

export const render = (params?: any) => {
  const props = {
    films: { data: [] as IFilm[], pending: false },
    ...params,
  } as NowPlayingProps;
  const store = mockStore({});
  const enzymeWrapper = mount(
    <Provider store={store}>
      <IntlProvider locale="en">
        <NowPlaying {...props} />
      </IntlProvider>
    </Provider>
  );
  return { enzymeWrapper, props };
};

describe("'Now playing' section", () => {
  it("Renders self", () => {
    let { enzymeWrapper } = render({
      films: {
        data: [
          {
            name: 1,
            id: 1,
            genres: [
              { name: 1, id: 1 },
              { name: 2, id: 1 },
            ],
          },
          {
            name: 2,
            id: 2,
            genres: [
              { name: 3, id: 3 },
              { name: 4, id: 4 },
            ],
            pending: false,
          },
        ],
        pending: false,
      },
    });
    expect(enzymeWrapper.find(".now-playing").hostNodes()).toHaveLength(1);
  });
  it("Renders films if provided, otherwise doesn't", () => {
    let { enzymeWrapper } = render({
      films: { data: [], pending: false },
    });
    expect(enzymeWrapper.find(".filmsNotFoundText").hostNodes()).toHaveLength(
      1
    );
    expect(enzymeWrapper.find(".slick-slider").hostNodes()).toHaveLength(0);

    enzymeWrapper = render({
      films: {
        data: [
          { name: "1", id: 1 },
          { name: "2", id: 2 },
        ],
        pending: false,
      },
    }).enzymeWrapper;
    expect(enzymeWrapper.find(".filmsNotFoundText").hostNodes()).toHaveLength(
      0
    );
    expect(enzymeWrapper.find(".slick-slider").hostNodes()).toHaveLength(1);
  });
});
