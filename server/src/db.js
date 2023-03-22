import mongoose from "mongoose";
import { MONGOOSE_URI } from "./config.js";

mongoose
  .connect(MONGOOSE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log(`connected to ${db.connections[0].name}`);
  })
  .catch((error) => {
    console.log(`${error} did not connect`);
  });
