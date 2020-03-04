import React from "react";
import { IUser, UserForShow } from "interfaces/IUser";
import { IAdminTablePayload } from ".";
import { IFilm, FilmForShow } from "interfaces/IFilm";

export interface ITable {
  name: string;
  payload: IAdminTablePayload;
}

export interface IUsersTable {
  users: IUser[];
}

export interface IFilmsTable {
  films: IFilm[];
}

export const UsersTable = (props: IUsersTable) => {
  const { users } = props;
  const keysOfUser = Object.keys(new UserForShow());
  return (
    <table className={`striped responsive-table`}>
      <thead>
        <tr>
          {keysOfUser.map((field, i) => (
            <th key={`${field}-${i}`}>{field}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr>
            {Object.entries(user).map((field, i) => {
              if (field[0] === "tickets") {
                return null;
              }
              return (
                <td key={`${field}-${i}`}>{field[1] ? field[1] : "null"}</td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const FilmsTable = (props: IFilmsTable) => {
  const { films } = props;
  const keysOfFilm = Object.keys(new FilmForShow());
  return (
    <table className={`striped responsive-table`}>
      <thead>
        <tr>
          {keysOfFilm.map((field, i) => (
            <th key={`${field}-${i}`}>{field}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {films.map(film => (
          <tr>
            {Object.entries(film).map((field, i) => {
              if (field[0] === "ratings") {
                return (
                  <td key={`${field}-${i}`}>
                    {field[1].reduce(
                      (prev: any, curr: any) =>
                        prev.ratingValue + curr.ratingValue
                    ) / field[1].length}
                  </td>
                );
              }
              // if(field[0] === "genres") {
              //   return <td key={`${field}-${i}`}>{field[1]}</td>
              // }
              return (
                <td key={`${field}-${i}`}>{field[1] ? field[1] : "null"}</td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const Table = (props: ITable) => {
  const { name, payload } = props;
  switch (name) {
    case "users":
      return <UsersTable users={payload.users.data} />;
    case "films":
      return <FilmsTable films={payload.films.data} />;
    default:
      return null;
  }
};
