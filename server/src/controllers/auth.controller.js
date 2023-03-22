import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { JWT_SECRET } from "../config.js";

// REGISTER USER //
export const register = async (req, res) => {
  try {
    const user = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(user.password, salt);

    const newUser = new User({
      ...user,
      password: passwordHash,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.log("🚀 ~ file: auth.controller.js:9 ~ register ~ error:", error);
    res.status(504).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).lean();
    if (!user) return res.status(400).json({ message: "User does not exist." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, JWT_SECRET);
    delete user.password;

    res.status(200).json({ token, user });
  } catch (error) {
    console.log("🚀 ~ file: auth.controller.js:39 ~ login ~ error:", error);
    res.status(504).json({ message: error.message });
  }
};
