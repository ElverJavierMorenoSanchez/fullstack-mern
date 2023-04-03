import { Router } from "express";
import {
  createPost,
  getFeedPosts,
  getUserPosts,
  likePost,
} from "../controllers/post.controller.js";
import { verifyToken } from "../middlewares/auth.js";
import { upload } from "../uploadFiles.js";

const router = Router();
router.post("/", verifyToken, upload.single("picture"), createPost);

// READ //

router.get("/", verifyToken, getFeedPosts);
router.get("/:userId", verifyToken, getUserPosts);

// UPDATE //
router.patch("/:id/like");

export default router;
