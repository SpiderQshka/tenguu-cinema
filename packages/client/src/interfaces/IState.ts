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
  isEditUserModalOpen: boolean;
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
