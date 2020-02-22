import { IUserPayload } from "./IUser";
import { ISessionsPayload } from "./ISession";
import { IFilmPayload } from "./IFilm";

export type IPayloads = IUserPayload | ISessionsPayload | IFilmPayload;
export interface IState {
  user: IUserPayload;
  sessions: ISessionsPayload;
  films: IFilmPayload;
  mainPage: {
    pending: boolean;
    error: { code: number; message: string } | null;
  };
}
