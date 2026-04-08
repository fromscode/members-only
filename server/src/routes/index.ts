import express from "express";
import controller from "../controllers/index.js";
import passport from "passport";
const router = express.Router();

router.post("/login", controller.login);

router.post("/register", controller.register);

router.get('/messages', passport.authenticate('jwt', {
    session: false,
}), controller.getMessages);

router.post('/message', passport.authenticate('jwt', {
    session: false,
}), controller.postMessage)

export default router;
