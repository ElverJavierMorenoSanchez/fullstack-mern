import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";
import { upload } from "../uploadFiles.js";

const router = Router();

router.post("/register", upload.single("picture"), register);
router.post("/login", login);

export default router;
