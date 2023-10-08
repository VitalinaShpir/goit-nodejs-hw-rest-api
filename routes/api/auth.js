const express = require("express");
const ctrl = require("../../controlers/authCtrl");
const { validateBody, authenticate, upload } = require("../../middlewares");
const schema = require("../../middlewares/validation");

const router = express.Router();

router.post("/register", validateBody(schema.registerSchema), ctrl.register);

router.post("/login", validateBody(schema.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.current);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "/",
  authenticate,
  validateBody(schema.updateSubscriptionSchema),
  ctrl.updateSubscription
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
