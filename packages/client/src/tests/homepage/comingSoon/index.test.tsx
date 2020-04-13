import React from "react";
import { ComingSoon } from "pages/homepage/components/comingSoon";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { IFilm } from "interfaces/IFilm";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";

const mockStore = configureStore();

export const render = (params?: any) => {
  const props = {
    films: [] as IFilm[],
    buyTicket: jest.fn(),
    ...params,
  };
  const store = mockStore({});
  const enzymeWrapper = mount(
    <Provider store={store}>
      <IntlProvider locale="en">
        <ComingSoon {...props} />
      </IntlProvider>
    </Provider>
  );
  return { enzymeWrapper, props };
};

describe("Coming soon", () => {
  it("Renders self and subcomponents", () => {
    let { enzymeWrapper } = render();
    expect(enzymeWrapper.find("#coming-soon").hostNodes()).toHaveLength(1);
    expect(enzymeWrapper.find(".filmsNotFoundText").hostNodes()).toHaveLength(
      1
    );
    expect(enzymeWrapper.find(".filmsNotFoundIcon").hostNodes()).toHaveLength(
      1
    );
    expect(enzymeWrapper.find(".filmBlock").hostNodes()).toHaveLength(0);
    expect(enzymeWrapper.find(".slick-slider").hostNodes()).toHaveLength(0);

    enzymeWrapper = render({
      films: [
        {
          name: "1",
          id: "1",
          genres: [],
        },
        {
          name: "1",
          id: "1",
          genres: [],
        },
      ],
    }).enzymeWrapper;
    expect(enzymeWrapper.find(".filmsNotFoundText").hostNodes()).toHaveLength(
      0
    );
    expect(enzymeWrapper.find(".filmsNotFoundIcon").hostNodes()).toHaveLength(
      0
    );
    expect(enzymeWrapper.find(".filmBlock").hostNodes()).toHaveLength(1);
    expect(enzymeWrapper.find(".slick-slider").hostNodes()).toHaveLength(1);
  });
});
