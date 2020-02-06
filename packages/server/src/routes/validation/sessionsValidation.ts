import Joi from "@hapi/joi";
import { ISession } from "../../interfaces/interfaces";
import { models } from "../../models/index";
import { _IDREGEXP } from "../../keys/keys";

export const sessionValidation = async (
  data: ISession
): Promise<string | null> => {
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

  const { error = null } = schema.validate(data);
  if (error) return error.details[0].message;

  // __________data validation___________

  const currentSession = data;

  const currentSessionFilm = await models.Film.findById(currentSession.filmId);

  if (!currentSessionFilm) return "Film not found";

  const CurrentSessionHall = await models.Hall.findById(currentSession.hallId);

  if (!CurrentSessionHall) return "Hall not found";

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
    return await Promise.all(promises).then(results =>
      results.every(result => result)
    );
  };

  const result = await isTimeForSessionFree();

  // console.log("Time for session:", result);

  if (!result) return "Hall is already booked on this time by another session";

  return null;
};
