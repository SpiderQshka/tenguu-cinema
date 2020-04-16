import russianMessages from "ra-language-russian";
import englishMessages from "ra-language-english";

export const currentLanguage = window.localStorage.getItem("lang") || "en";

export const validation = {
  hall: {
    minNameSize: 5,
    maxNameSize: 20,
    minRowsNumber: 10,
    maxRowsNumber: 50,
    minSeatsOnRowNumber: 10,
    maxSeatsOnRowNumber: 50,
  },
  genre: {
    minNameSize: 3,
    maxNameSize: 20,
  },
  film: {
    minNameSize: 3,
    maxNameSize: 50,
    minDuration: 10,
    maxDuration: 200,
  },
  user: {
    minNameSize: 5,
    maxNameSize: 20,
  },
};

export const messages = {
  ru: {
    ...russianMessages,
    ra: {
      ...russianMessages.ra,
      page: {
        ...russianMessages.ra.page,
        empty: "Ох, здесь ещё ничего нет",
        invite: "Впрочем, можно это исправить",
      },
    },
    resources: {
      halls: {
        name: "Зал |||| Залы",
      },
      sessions: {
        name: "Сеанс |||| Сеансы",
      },
      films: {
        name: "Фильм |||| Фильмы",
      },
      users: {
        name: "Пользователь |||| Пользователи",
      },
      genres: {
        name: "Жанр |||| Жанры",
      },
      tickets: {
        name: "Билет |||| Билеты",
      },
      translations: {
        name: "Перевод |||| Переводы",
      },
    },
  },
  en: englishMessages,
} as any;
