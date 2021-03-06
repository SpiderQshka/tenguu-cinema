import { Schema, model } from "mongoose";
import { ITranslation } from "../interfaces/interfaces";

const translationScheme: Schema<ITranslation> = new Schema({
  ru: {
    type: String
  },
  en: {
    type: String
  }
});

translationScheme.set("toJSON", {
  transform: function(doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

export default model<ITranslation>("Translation", translationScheme);
