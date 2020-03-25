import Joi from "@hapi/joi";
import { ISession } from "../../interfaces/interfaces";
import { models } from "../../models/index";
import { _IDREGEXP } from "../../keys/keys";

export const sessionValidation = async (
  data: ISession
): Promise<{ error: string | null; code: number }> => {
  const schema = Joi.object({
    film: Joi.string()
      .pattern(_IDREGEXP)
      .required(),
    dateTime: Joi.date().required(),
    price: Joi.number()
      .min(0)
      .required(),
    hall: Joi.string()
      .pattern(_IDREGEXP)
      .required()
  });

  const { error = null } = schema.validate(data);
  if (error) return { error: error.details[0].message, code: 400 };

  // __________data validation___________

  const currentSession = data;

  const currentSessionFilm = await models.Film.findById(currentSession.film);

  if (!currentSessionFilm) return { error: "Film not found", code: 404 };

  const CurrentSessionHall = await models.Hall.findById(currentSession.hall);

  if (!CurrentSessionHall) return { error: "Hall not found", code: 404 };

  const sessionsWithTheSameHall = await models.Session.find({
    hallId: currentSession.hall
  });

  const isTimeForSessionFree = async () => {
    const promises = sessionsWithTheSameHall.map(
      async (session): Promise<boolean> => {
        const filmOfSession = await models.Film.findById(session.film);

        if (!filmOfSession) throw Error;
        return (
          new Date(session.dateTime).getTime() >
            new Date(currentSession.dateTime).getTime() +
              currentSessionFilm.duration ||
          new Date(session.dateTime).getTime() + filmOfSession.duration <
            new Date(currentSession.dateTime).getTime()
        );
      }
    );
    return await Promise.all(promises).then(results =>
      results.every(result => result)
    );
  };

  const result = await isTimeForSessionFree();

  // console.log("Time for session:", result);

  if (!result)
    return {
      error: "Hall is already booked on this time by another session",
      code: 400
    };

  return { error: null, code: 200 };
};
