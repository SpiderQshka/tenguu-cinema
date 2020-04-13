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
  const store = mockStore({});
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
        name: "1",
        id: "1",
        genres: [],
      },
    });
    expect(enzymeWrapper.find(".rating").hostNodes()).toHaveLength(0);

    enzymeWrapper = render({
      film: {
        name: "1",
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
        name: "1",
        id: "1",
      },
    });
    expect(enzymeWrapper.find(".genres").hostNodes()).toHaveLength(0);

    enzymeWrapper = render({
      film: {
        name: "1",
        id: "1",
        genres: [],
      },
    }).enzymeWrapper;
    expect(enzymeWrapper.find(".genres").hostNodes()).toHaveLength(1);
  });
  it("Calls toggleFilmDescription after toggleDescriptionBtn click", () => {
    let { enzymeWrapper, props } = render({
      film: {
        name: "1",
        id: "1",
        description:
          "Some description that is longer than descriptionSizeWhileIsNotOpen: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    });
    expect(props.toggleDescription.mock.calls.length).toBe(0);
    enzymeWrapper
      .find(".toggleDescriptionBtn")
      .hostNodes()
      .simulate("click");

    expect(props.toggleDescription.mock.calls.length).toBe(1);
  });
  it("Calls buyTicket function after preOrderBtn click", () => {
    let { enzymeWrapper, props } = render({
      film: {
        name: "1",
        id: "1",
      },
    });

    enzymeWrapper
      .find(".preOrderBtn")
      .hostNodes()
      .simulate("click");

    expect(props.buyTicket.mock.calls.length).toBe(1);
  });
});
