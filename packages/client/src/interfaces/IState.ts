import { IUserPayload } from "./IUser";
import { ISessionsPayload } from "./ISession";
import { IFilmPayload } from "./IFilm";

export interface IState {
  user: IUserPayload;
  sessions: ISessionsPayload;
  films: IFilmPayload;
}
