import { Router } from "express";
import {
  addRemoveFriend,
  getUser,
  getUserFriends,
} from "../controllers/users.controller.js";
import { verifyToken } from "../middlewares/auth.js";

const router = Router();

// READ //
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

// UPDATE //
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
