import russianMessages from "ra-language-russian";
import englishMessages from "ra-language-english";

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
        fields: {
          name: "Название",
          numberOfRows: "Кол-во рядов",
          seatsOnRow: "Мест в ряду",
          ru: "Название, русск.",
          en: "Название, англ.",
        },
      },
      sessions: {
        name: "Сеанс |||| Сеансы",
        fields: {
          film: "Фильм",
          dateTime: "Дата & Время",
          price: "Цена",
          hall: "Зал",
        },
      },
      films: {
        name: "Фильм |||| Фильмы",
        fields: {
          nameRu: "Название, русск.",
          nameEn: "Название, англ.",
          descRu: "Описание, русск.",
          descEn: "Описание, англ.",
          name: "Название",
          description: "Описание",
          genres: "Жанры",
          trailerLink: "Ссылка на трейлер",
          filmImage: "Картинка",
          ratings: "Оценки",
          raterName: "Автор",
          ratingValue: "Значение",
          releaseDate: "Дата релиза",
        },
      },
      users: {
        name: "Пользователь |||| Пользователи",
        fields: {
          status: "Статус",
          email: "Адрес эл. почты",
          username: "Имя пользователя",
          password: "Пароль",
          photo: "Фото",
        },
      },
      genres: {
        name: "Жанр |||| Жанры",
        fields: {
          name: "Название",
          ru: "Название, русск.",
          en: "Название, англ.",
        },
      },
      tickets: {
        name: "Билет |||| Билеты",
        fields: {
          session: "Сеанс",
          user: "Пользователь",
          seat: {
            row: "Ряд",
            seatNumber: "Место",
          },
        },
      },
      translations: {
        name: "Перевод |||| Переводы",
        fields: {
          ru: "Русск.",
          en: "Англ.",
        },
      },
    },
  },
  en: {
    ...englishMessages,
    resources: {
      halls: {
        fields: {
          name: "Name",
          numberOfRows: "Rows",
          seatsOnRow: "Seats on row",
          ru: "Name, ru",
          en: "Name, en",
        },
      },
      sessions: {
        fields: {
          film: "Film",
          dateTime: "Date & Time",
          price: "Price",
          hall: "Hall",
        },
      },
      films: {
        fields: {
          nameRu: "Name, ru",
          nameEn: "Name, en",
          descRu: "Description, ru",
          descEn: "Description, en",
          name: "Name",
          description: "Description",
          genres: "Genres",
          trailerLink: "Trailer, link",
          filmImage: "Film image",
          ratings: "Ratings",
          raterName: "Author",
          ratingValue: "Value",
          releaseDate: "Release Date",
        },
      },
      users: {
        fields: {
          status: "Status",
          email: "Email",
          username: "Username",
          password: "Password",
          photo: "Photo",
        },
      },
      genres: {
        fields: {
          name: "Name",
          ru: "Name, ru",
          en: "Name, en",
        },
      },
      tickets: {
        fields: {
          session: "Session",
          user: "User",
          seat: {
            row: "Row",
            seatNumber: "Seat number",
          },
        },
      },
      translations: {
        fields: {
          ru: "Ru",
          en: "En",
        },
      },
    },
  },
} as any;
