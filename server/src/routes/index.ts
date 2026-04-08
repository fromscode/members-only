import express from "express";
import controller from "../controllers/index.js";
import passport from "passport";
const router = express.Router();

router.post("/login", controller.login);

router.post("/register", controller.register);

router.get('/posts', passport.authenticate('jwt', {
    session: false,
}), controller.posts)

export default router;
