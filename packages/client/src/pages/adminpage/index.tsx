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
import { myDataProvider } from "./imageDataProvider";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import enDateLocale from "date-fns/locale/en-US";
import ruDateLocale from "date-fns/locale/ru";
const history = createHashHistory({ hashType: "noslash" });

const localeDateMap = {
  en: enDateLocale,
  ru: ruDateLocale
} as any;

const messages = {
  ru: {
    ...russianMessages,
    ra: {
      ...russianMessages.ra,
      page: {
        ...russianMessages.ra.page,
        empty: "Ох, здесь ещё ничего нет",
        invite: "Впрочем, можно это исправить"
      }
    },
    resources: {
      halls: {
        name: "Зал |||| Залы"
      },
      sessions: {
        name: "Сеанс |||| Сеансы"
      },
      films: {
        name: "Фильм |||| Фильмы"
      },
      users: {
        name: "Пользователь |||| Пользователи"
      },
      genres: {
        name: "Жанр |||| Жанры"
      },
      tickets: {
        name: "Билет |||| Билеты"
      },
      translations: {
        name: "Перевод |||| Переводы"
      }
    }
  },
  en: englishMessages
} as any;

export const AdminPage = () => {
  const currentLanguage = window.localStorage.getItem("lang") || "en";
  return (
    <MuiPickersUtilsProvider
      utils={DateFnsUtils}
      locale={localeDateMap[currentLanguage]}
    >
      <Provider
        store={createAdminStore({
          dataProvider: Object.assign(myDataProvider),
          history
        })}
      >
        <Admin
          dataProvider={Object.assign(myDataProvider)}
          history={history}
          i18nProvider={polyglotI18nProvider(
            () => messages[currentLanguage],
            currentLanguage
          )}
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
    </MuiPickersUtilsProvider>
  );
};
