const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.login);
router.get("/home", userController.users);
router.post("/", userController.find);
router.get("/:id", userController.delete);
router.get("/adduser", userController.form);
router.post("/adduser", userController.create);
router.post("/signin", userController.signin);
router.get("/edituser/:id", userController.edit);
router.post("/edituser/:id", userController.update);
router.get("/logout", userController.logout);

module.exports = router;
