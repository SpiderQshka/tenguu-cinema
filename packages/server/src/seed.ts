import { models } from "./models/index";

export default async (): Promise<void> => {
  const doesAdminExists = await models.User.findOne({ status: "admin" });

  if (!doesAdminExists) {
    const admin = new models.User({
      username: "admin",
      password: await models.User.hashPassword("password"),
      email: "admin@gmail.com",
      status: "admin",
      photo: ""
    });

    admin.save();
    console.log("admin created");
  } else {
    console.log("admin already exists");
  }
};
