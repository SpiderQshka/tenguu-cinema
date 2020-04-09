import React from "react";
import { NowPlayingProps } from "containers/NowPlayingContainer";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { IFilm } from "interfaces/IFilm";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import { NowPlaying } from "pages/homepage/components/nowPlaying";

const mockStore = configureStore();

export const renderNowPlaying = (params?: any) => {
  const props = {
    films: [] as IFilm[],
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

describe("Film Carousel", () => {
  it("Renders self", () => {
    let { enzymeWrapper } = renderNowPlaying({
      films: [],
    });
    expect(enzymeWrapper.find(".now-playing").hostNodes()).toHaveLength(1);
  });
  it("Renders films if provided, otherwise doesn't", () => {
    let { enzymeWrapper } = renderNowPlaying({
      films: [],
    });
    expect(enzymeWrapper.find(".filmsNotFoundText").hostNodes()).toHaveLength(
      1
    );
    expect(enzymeWrapper.find(".slick-slider").hostNodes()).toHaveLength(0);

    enzymeWrapper = renderNowPlaying({
      films: [
        { name: "1", id: 1 },
        { name: "2", id: 2 },
      ],
    }).enzymeWrapper;
    expect(enzymeWrapper.find(".filmsNotFoundText").hostNodes()).toHaveLength(
      0
    );
    expect(enzymeWrapper.find(".slick-slider").hostNodes()).toHaveLength(1);
  });
});
