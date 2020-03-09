import React from "react";
import jsonServerProvider from "ra-data-json-server";
import { DataProvider } from "ra-core";
import { createHashHistory } from "history";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import { Provider } from "react-redux";
import createAdminStore from "createAdminStore";
import { adminPageTokenFetch } from "APIServices/CRUD";
import { HallList, HallEdit, HallCreate } from "./lists/HallList";
import { GenreList, GenreEdit, GenreCreate } from "./lists/GenreList";
import { FilmList, FilmEdit, FilmCreate } from "./lists/FilmList";
import { SessionList, SessionEdit, SessionCreate } from "./lists/SessionList";
import { TicketEdit, TicketCreate, TicketList } from "./lists/TicketList";
import { UserList, UserCreate, UserEdit } from "./lists/UserList";

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
        <Resource
          name="sessions"
          list={SessionList}
          edit={SessionEdit}
          create={SessionCreate}
        />
        <Resource
          name="films"
          list={FilmList}
          edit={FilmEdit}
          create={FilmCreate}
        />
        <Resource
          name="users"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
        />
        <Resource
          name="genres"
          list={GenreList}
          edit={GenreEdit}
          create={GenreCreate}
        />
        <Resource
          name="tickets"
          list={TicketList}
          edit={TicketEdit}
          create={TicketCreate}
        />
      </Admin>
    </Provider>
  );
};
