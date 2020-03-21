import { models } from "../models/index";

export const getFilmsForClient = async (params: object = {}) =>
  await models.Film.find(params).populate("genres");
export const getSessionsForClient = async (params: object = {}) =>
  await models.Session.find(params)
    .populate("film")
    .populate("hall");
export const getTicketsForClient = async (params: object = {}) =>
  await models.Ticket.find(params);
// .populate({ path: "user", select: "id" })
// .populate({ path: "session", select: "id" });
export const getUsersForClient = async (params: object = {}) =>
  await models.User.find(params).populate("tickets");
