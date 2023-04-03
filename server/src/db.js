import mongoose from "mongoose";
import { MONGOOSE_URI } from "./config.js";
import Post from "./models/Post.js";
import User from "./models/User.js";
import { posts, users } from "./data/index.js";

mongoose
  .connect(MONGOOSE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log(`connected to ${db.connections[0].name}`);
    //User.insertMany(users);
    //Post.insertMany(posts);
  })
  .catch((error) => {
    console.log(`${error} did not connect`);
  });
