import { IUserAction } from "./IUser";
import { ISessionAction } from "./ISession";
import { IFilmAction } from "./IFilm";

export interface IState {
  userData: IUserAction;
  sessionsData: ISessionAction;
  filmsData: IFilmAction;
}
