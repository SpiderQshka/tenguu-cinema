import jsonServerProvider from "ra-data-json-server";
import { adminPageTokenFetch } from "APIServices/CRUD";
const dataProvider = jsonServerProvider(`/api`, adminPageTokenFetch);

const convertFileToBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    if (!(file.rawFile instanceof File)) resolve(file);
    else {
      const reader = new FileReader();
      reader.readAsDataURL(file.rawFile);

      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    }
  });

export const myDataProvider = {
  ...dataProvider,
  update: (resource: string, params: any) => {
    if (!params.data.filmImage) {
      return params.data.descRu || params.data.descEn
        ? dataProvider.update(resource, {
            ...params,
            data: {
              ...params.data,
              descRu: params.data.descRu.replace(/(<([^>]+)>)/gi, ""),

              descEn: params.data.descEn.replace(/(<([^>]+)>)/gi, "")
            }
          })
        : dataProvider.update(resource, params);
    }
    return convertFileToBase64(params.data.filmImage).then(result =>
      dataProvider.update(resource, {
        ...params,
        data: {
          ...params.data,
          filmImage: result,
          descRu: params.data.descRu
            ? params.data.descRu.replace(/(<([^>]+)>)/gi, "")
            : "",
          descEn: params.data.descEn
            ? params.data.descEn.replace(/(<([^>]+)>)/gi, "")
            : ""
        }
      })
    );
  },
  create: (resource: string, params: any) => {
    if (!params.data.filmImage) {
      return params.data.descRu || params.data.descEn
        ? dataProvider.create(resource, {
            ...params,
            data: {
              ...params.data,
              descRu: params.data.descRu.replace(/(<([^>]+)>)/gi, ""),

              descEn: params.data.descEn.replace(/(<([^>]+)>)/gi, "")
            }
          })
        : dataProvider.create(resource, params);
    }

    return convertFileToBase64(params.data.filmImage).then(result =>
      dataProvider.create(resource, {
        ...params,
        data: {
          ...params.data,
          filmImage: result,
          descRu: params.data.descRu
            ? params.data.descRu.replace(/(<([^>]+)>)/gi, "")
            : "",
          descEn: params.data.descEn
            ? params.data.descEn.replace(/(<([^>]+)>)/gi, "")
            : ""
        }
      })
    );
  }
};
