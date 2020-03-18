import React from "react";
import { createHashHistory } from "history";
import { Admin, Resource } from "react-admin";
import { Provider } from "react-redux";
import createAdminStore from "createAdminStore";
import { HallList, HallEdit, HallCreate } from "./lists/HallList";
import { GenreList, GenreEdit, GenreCreate } from "./lists/GenreList";
import { FilmList, FilmEdit, FilmCreate } from "./lists/FilmList";
import { SessionList, SessionEdit, SessionCreate } from "./lists/SessionList";
import { TicketEdit, TicketCreate, TicketList } from "./lists/TicketList";
import { UserList, UserCreate, UserEdit } from "./lists/UserList";
import polyglotI18nProvider from "ra-i18n-polyglot";
import russianMessages from "ra-language-russian";
import englishMessages from "ra-language-english";
import { TranslationList } from "./lists/TranslationList";
import imageDataProvider from "./imageDataProvider";
import jsonServerProvider from "ra-data-json-server";
import { adminPageTokenFetch } from "APIServices/CRUD";

const dataProvider = jsonServerProvider("/api", adminPageTokenFetch);
const history = createHashHistory({ hashType: "noslash" });

export const AdminPage = (props: { lang: string }) => {
  const messages = {
    ru: russianMessages,
    en: englishMessages
  } as any;

  return (
    <Provider store={createAdminStore({ imageDataProvider, history })}>
      <Admin
        dataProvider={imageDataProvider}
        history={history}
        title={props.lang === "ru" ? "Админ панель" : "My admin"}
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
        <Resource name="translations" list={TranslationList} />
      </Admin>
    </Provider>
  );
};
