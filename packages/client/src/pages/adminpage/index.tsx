import React from "react";
import jsonServerProvider from "ra-data-json-server";
import { createHashHistory } from "history";
import { Admin, Resource } from "react-admin";
import { Provider } from "react-redux";
import createAdminStore from "createAdminStore";
import { adminPageTokenFetch } from "APIServices/CRUD";
import { HallList, HallEdit, HallCreate } from "./lists/HallList";
import { GenreList, GenreEdit, GenreCreate } from "./lists/GenreList";
import { FilmList, FilmEdit, FilmCreate } from "./lists/FilmList";
import { SessionList, SessionEdit, SessionCreate } from "./lists/SessionList";
import { TicketEdit, TicketCreate, TicketList } from "./lists/TicketList";
import { UserList, UserCreate, UserEdit } from "./lists/UserList";
import polyglotI18nProvider from "ra-i18n-polyglot";
import russianMessages from "ra-language-russian";
import englishMessages from "ra-language-english";

const messages = {
  ru: russianMessages,
  en: englishMessages
} as any;

const dataProvider = jsonServerProvider("/api", adminPageTokenFetch);
const history = createHashHistory({ hashType: "noslash" });

export const AdminPage = (props: { lang: string }) => {
  return (
    <Provider store={createAdminStore({ dataProvider, history })}>
      <Admin
        dataProvider={dataProvider}
        history={history}
        title="My Admin"
        i18nProvider={polyglotI18nProvider(() => messages[props.lang])}
      >
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
