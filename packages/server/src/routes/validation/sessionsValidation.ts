import Joi, { ValidationResult } from "@hapi/joi";
import { ISession, IFilm } from "../../interfaces/interfaces";
import models from "../../models/index";
import { _IDREGEXP } from "../../keys/keys";
import { Response, Request } from "express";

export const sessionSchemaValidation = (data: ISession): ValidationResult => {
  const schema = Joi.object({
    filmId: Joi.string()
      .pattern(_IDREGEXP)
      .required(),
    dateTime: Joi.date().required(),
    price: Joi.number()
      .min(0)
      .required(),
    hallId: Joi.string()
      .pattern(_IDREGEXP)
      .required()
  });
  return schema.validate(data);
};

export const sessionDataValidation = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const currentSession = req.body;

  const currentSessionFilm = await models.Film.findById(currentSession.filmId);

  if (!currentSessionFilm) return res.status(404).send("Film not found");

  const CurrentSessionHall = await models.Hall.findById(currentSession.hallId);

  if (!CurrentSessionHall) return res.status(404).send("Hall not found");

  const sessionsWithTheSameHall = await models.Session.find({
    hallId: currentSession.hallId
  });

  const isTimeForSessionFree = async () => {
    const promises = sessionsWithTheSameHall.map(
      async (session): Promise<boolean> => {
        const filmOfSession = await models.Film.findById(session.filmId);

        if (!filmOfSession) throw Error;
        return (
          session.dateTime >
            currentSession.dateTime + currentSessionFilm.duration ||
          session.dateTime + filmOfSession.duration < currentSession.dateTime
        );
      }
    );
    Promise.all(promises).then(results => results.every(result => result));
  };

  // const isTimeForSessionFree = await sessionsWithTheSameHall.every(

  // async (session): Promise<boolean> => {
  //   const filmOfSession = await models.Film.findById(session.filmId);

  //   if (!filmOfSession) throw Error;
  //   return (
  //     session.dateTime >
  //       currentSession.dateTime + currentSessionFilm.duration ||
  //     session.dateTime + filmOfSession.duration < currentSession.dateTime
  //   );
  // }
  // );

  const result = await isTimeForSessionFree();

  console.log("Time for session:", result);

  if (!isTimeForSessionFree)
    return res
      .status(400)
      .send("Hall is already booked on this time by another session");
  else return res.status(200).send("Validated successfully");
};
