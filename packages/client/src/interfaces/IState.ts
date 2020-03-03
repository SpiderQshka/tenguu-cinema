import { IUserPayload } from "./IUser";
import { ISessionsPayload } from "./ISession";
import { IFilmPayload } from "./IFilm";
import { IGenresPayload } from "./IGenre";
import { IHallPayload } from "./IHall";
import { ITicketsPayload } from "./ITicket";
export interface IModalsPayload {
  isRegModalOpen: boolean;
  isLoginModalOpen: boolean;
}

export type IPayloads = IUserPayload | ISessionsPayload | IFilmPayload;
export interface IState {
  users: IUserPayload;
  sessions: ISessionsPayload;
  films: IFilmPayload;
  mainPage: {
    pending: boolean;
    error: { code: number; message: string } | null;
  };
  adminPage: {
    pending: boolean;
    error: { code: number; message: string } | null;
  };
  modals: IModalsPayload;
  genres: IGenresPayload;
  halls: IHallPayload;
  tickets: ITicketsPayload;
}
