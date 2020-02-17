import { models } from "../models/index";

export const getModelsIds = async (
  modelName: string,
  params: object
): Promise<{ error: string | null; idsArray?: number[] }> => {
  const doesModelNameExists = await models[modelName];
  if (!doesModelNameExists) return { error: "Model name is incorrect" };

  const data: any[] = await models[modelName].find(params);
  if (!data[0]) {
    return {
      error: `Model '${modelName}' with given param(s) '${Object.getOwnPropertyNames(
        params
      )}' not found`
    };
  }

  return { error: null, idsArray: data.map(element => element._id) };
};

export const getModelsIdsWithMultipleParams = async (
  modelName: string,
  params: any[]
): Promise<{ error: string | null; idsArray?: number[] }> => {
  let promises: Promise<number[]>[] = [];

  promises = params.map(async paramsObj => {
    const data = await getModelsIds(modelName, paramsObj);
    if (data.error) throw Error(data.error);
    if (data.idsArray && !data.idsArray[0])
      throw Error("Genre name doesn't exists");
    return data.idsArray || [];
  });

  let idsArray: number[] = [];

  try {
    idsArray = await Promise.all(promises).then(idsArrays =>
      idsArrays.reduce((prev, curr) => prev.concat(curr), [])
    );
  } catch (err) {
    return { error: err.message };
  }

  return { error: null, idsArray };
};
