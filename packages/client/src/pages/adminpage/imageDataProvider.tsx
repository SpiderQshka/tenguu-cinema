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
    if (!params.data.filmImage && !params.data.photo) {
      if (params.data.descRu || params.data.descEn) {
        return dataProvider.update(resource, {
          ...params,
          data: {
            ...params.data,
            descRu: params.data.descRu.replace(/(<([^>]+)>)/gi, ""),

            descEn: params.data.descEn.replace(/(<([^>]+)>)/gi, ""),
          },
        });
      }

      return dataProvider.update(resource, params);
    } else {
      if (params.data.filmImage) {
        return convertFileToBase64(params.data.filmImage).then((result) =>
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
                : "",
            },
          })
        );
      }
      if (params.data.photo) {
        return convertFileToBase64(params.data.photo).then((result) =>
          dataProvider.update(resource, {
            ...params,
            data: {
              ...params.data,
              photo: result,
            },
          })
        );
      }
    }
  },
  create: (resource: string, params: any) => {
    if (!params.data.filmImage && !params.data.photo) {
      if (params.data.descRu || params.data.descEn) {
        return dataProvider.create(resource, {
          ...params,
          data: {
            ...params.data,
            descRu: params.data.descRu.replace(/(<([^>]+)>)/gi, ""),

            descEn: params.data.descEn.replace(/(<([^>]+)>)/gi, ""),
          },
        });
      }

      return dataProvider.create(resource, params);
    }
    if (params.data.filmImage) {
      return convertFileToBase64(params.data.filmImage).then((result) =>
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
              : "",
          },
        })
      );
    }
    if (params.data.photo) {
      return convertFileToBase64(params.data.photo).then((result) =>
        dataProvider.create(resource, {
          ...params,
          data: {
            ...params.data,
            photo: result,
          },
        })
      );
    }
  },
};
