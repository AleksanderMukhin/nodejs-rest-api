const express = require("express");
const router = express.Router();
const { validateBody, authintecate } = require('../../middellwares');
const { schemas } = require('../../models/user');
const ctrl = require("../../controllers/auth");

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authintecate, ctrl.getCurrent);

router.post("/logout",authintecate, ctrl.logout)

module.exports = router;