import { IUserPayload } from "./IUser";
import { ISessionsPayload } from "./ISession";
import { IFilmPayload } from "./IFilm";
import { IHallPayload } from "./IHall";
import { ITicketsPayload } from "./ITicket";
import { IMainPagePayload, IAdminPagePayload } from "./IPages";
import { IModalsPayload } from "./IModal";
import { ILangPayload } from "./ILang";
import { IMessagePayload } from "./IMessage";

export type IPayloads =
  | IUserPayload
  | ISessionsPayload
  | IFilmPayload
  | IMainPagePayload
  | IAdminPagePayload
  | IModalsPayload
  | IHallPayload
  | ITicketsPayload;
export interface IState {
  lang: ILangPayload;
  users: IUserPayload;
  sessions: ISessionsPayload;
  films: IFilmPayload;
  mainPage: IMainPagePayload;
  adminPage: IAdminPagePayload;
  modals: IModalsPayload;
  halls: IHallPayload;
  tickets: ITicketsPayload;
  message: IMessagePayload;
}
