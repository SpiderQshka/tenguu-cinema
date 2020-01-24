"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const main = async () => {
  await mongoose_1.default.connect(
    "mongodb+srv://SpiderQshka:Prusov.2002@cluster0-phrn3.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
};
main();
const app = express_1.default();
const PORT = 4000;
app.get("/", (req, res) => {
  res.send("!");
});
app.listen(PORT, () => {
  console.log(`server is running and using port: ${PORT}`);
});
exports.default = app;
//# sourceMappingURL=server.js.map
