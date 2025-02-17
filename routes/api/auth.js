const express = require("express");
const router = express.Router();
const { validateBody,validateEmailBody, authintecate, upload } = require('../../middellwares');
const { schemas } = require('../../models/user');
const ctrl = require("../../controllers/auth");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.get("/verify/:verificationToken", ctrl.verifyEmail)

router.post("/verify", validateEmailBody(schemas.emailSchema), ctrl.resendVerifyEmail)

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authintecate, ctrl.getCurrent);

router.post("/logout", authintecate, ctrl.logout);

router.patch("/avatars", authintecate, upload.single("avatar"), ctrl.updateAvatar);

module.exports = router;