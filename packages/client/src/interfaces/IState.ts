import { IUserPayload } from "./IUser";
import { ISessionsPayload } from "./ISession";
import { IFilmPayload } from "./IFilm";
import { IGenresPayload } from "./IGenre";
import { IHallPayload } from "./IHall";
import { ITicketsPayload } from "./ITicket";
import { IMainPagePayload, IAdminPagePayload } from "./IPages";
import { IGridPayload } from "./IGrid";
export interface IModalsPayload {
  isRegModalOpen: boolean;
  isLoginModalOpen: boolean;
  isBuyTicketModalOpen: boolean;
  isUserTicketsModalOpen: boolean;
  isWatchTrailerModalOpen: boolean;
}

export interface ILangPayload {
  currentLang: "ru" | "en";
  translations: {
    ru: any;
    en: any;
  };
}

export type IPayloads =
  | IUserPayload
  | ISessionsPayload
  | IFilmPayload
  | IMainPagePayload
  | IAdminPagePayload
  | IModalsPayload
  | IGenresPayload
  | IHallPayload
  | ITicketsPayload
  | IGridPayload;
export interface IState {
  lang: ILangPayload;
  users: IUserPayload;
  sessions: ISessionsPayload;
  films: IFilmPayload;
  mainPage: IMainPagePayload;
  adminPage: IAdminPagePayload;
  modals: IModalsPayload;
  genres: IGenresPayload;
  halls: IHallPayload;
  tickets: ITicketsPayload;
  grid: IGridPayload;
}
