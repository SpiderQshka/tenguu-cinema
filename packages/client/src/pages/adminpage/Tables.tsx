import React from "react";
import { IUser } from "interfaces/IUser";
import { IAdminTablePayload } from ".";
import { IFilm, FilmForShow } from "interfaces/IFilm";
import { IGenre } from "interfaces/IGenre";

export class TableKeys {
  static users() {
    return ["_id", "status", "email", "username", "photo", "tickets"];
  }
  static genres() {
    return ["_id", "name"];
  }
  static films() {
    return [
      "_id",
      "genres",
      "name",
      "duration",
      "trailerLink",
      "filmImage",
      "ratings",
      "releaseDate"
    ];
  }
  static sessions() {
    return ["_id", "dateTime", "price", "hall", "film"];
  }
  static halls() {
    return ["_id", "name", "numberOfRows", "seatsOnRow"];
  }
  static tickets() {
    return ["_id", "userId", "status", "seat", "session"];
  }
}

export interface ITableContainer {
  name: "users" | "films" | "genres" | "halls" | "sessions" | "tickets";
  payload: IAdminTablePayload;
}

export interface ITable {
  data: any[];
  keys: string[];
}

export const Table = (props: ITable) => {
  const { data, keys } = props;
  return (
    <table className={`striped responsive-table`}>
      <thead>
        <tr>
          {keys.map((field, i) => (
            <th key={`${field}-${i}`}>{field}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(element => (
          <tr>
            {Object.values(element).map((field: any, i) => {
              if (typeof field === "object") {
                if (Array.isArray(field))
                  return <td key={`${field}-${i}`}>Array</td>;
                return (
                  <td key={`${field}-${i}`}>
                    {Object.values(field)[0] as any}
                  </td>
                );
              }

              return <td key={`${field}-${i}`}>{field ? field : "null"}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const TableContainer = (props: ITableContainer) => {
  const { name, payload } = props;
  return <Table data={payload[name].data} keys={TableKeys[name]()} />;
};
