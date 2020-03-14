import { Schema, model } from "mongoose";
import { IGenre, ITranslation } from "../interfaces/interfaces";

const translationScheme: Schema<ITranslation> = new Schema({
  ru: {
    type: String,
    required: true
  },
  en: {
    type: String,
    required: true
  }
});

translationScheme.set("toJSON", {
  transform: function(doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

export default model<IGenre>("Translation", translationScheme);
