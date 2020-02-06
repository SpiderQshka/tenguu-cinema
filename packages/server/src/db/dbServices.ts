import mongoose, { Mongoose } from "mongoose";

export const connectDb = async (url: string): Promise<Mongoose> => {
  return await mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });
};

export const clearDb = async (): Promise<void> => {
  await mongoose.connection.db.dropDatabase();
};

export const clearCollection = async (
  collectionName: string
): Promise<void> => {
  try {
    await mongoose.connection.db.dropCollection(collectionName);
  } catch (e) {
    console.log("Collection doesn't exist");
  }
};
