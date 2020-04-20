export type ILangs = "ru" | "en";

export interface ILangPayload {
  currentLang: ILangs;
  translations: {
    ru: any;
    en: any;
  };
}
