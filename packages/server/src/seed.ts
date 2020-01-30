import models from "./models/index";

export default () => {
  const admin = new models.User({
    username: "admin",
    password: "password",
    email: "admin@gmail.com",
    status: "admin"
  });

  admin.save();

  console.log("admin created");
};
