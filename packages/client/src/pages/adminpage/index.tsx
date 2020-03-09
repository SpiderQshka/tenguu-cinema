import React from "react";
import jsonServerProvider from "ra-data-json-server";
import { createHashHistory } from "history";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import { Provider } from "react-redux";
import createAdminStore from "createAdminStore";
import { adminPageTokenFetch } from "APIServices/CRUD";
import { HallList, HallEdit, HallCreate } from "./lists/HallList";
import { GenreList, GenreEdit, GenreCreate } from "./lists/GenreList";
import { FilmList, FilmEdit } from "./lists/FilmList";

const dataProvider = jsonServerProvider("/api", adminPageTokenFetch);
const history = createHashHistory({ hashType: "noslash" });

export const AdminPage = () => {
  return (
    <Provider store={createAdminStore({ dataProvider, history })}>
      <Admin dataProvider={dataProvider} history={history} title="My Admin">
        <Resource
          name="halls"
          list={HallList}
          edit={HallEdit}
          create={HallCreate}
        />
        <Resource name="tickets" list={ListGuesser} />
        <Resource name="sessions" list={ListGuesser} />
        <Resource name="films" list={FilmList} edit={FilmEdit} />
        <Resource name="users" list={ListGuesser} />
        <Resource
          name="genres"
          list={GenreList}
          edit={GenreEdit}
          create={GenreCreate}
        />
      </Admin>
    </Provider>
  );
};
