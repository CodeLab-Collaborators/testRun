import * as express from "express";
import { createTest } from "../controller/stackController";
import { createUser, getOneUser, getUser, updateUser } from "../controller/userController";

const router = express.Router()

router.route("/").get(getUser)
router.route("/one/:id").get(getOneUser)
router.route("/update/:id").get(updateUser)
// router.route("/delete/:id").get(deleteUser)
router.route("/create").post(createUser)
router.route("/test").post(createTest);

export default router